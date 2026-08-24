import {afterEach, beforeEach, describe, expect, mock, test} from "bun:test";
import ObjectFacade from "../src/facades/Object";

describe("Object.serialize", () => {
    test("null and undefined normalize to null", () => {
        expect(ObjectFacade.serialize(null)).toBeNull();
        expect(ObjectFacade.serialize(undefined)).toBeNull();
    });

    test("blank strings normalize to null", () => {
        expect(ObjectFacade.serialize("")).toBeNull();
        expect(ObjectFacade.serialize("   ")).toBeNull();
    });

    test("empty object passes through unchanged", () => {
        expect(ObjectFacade.serialize({})).toEqual({});
    });

    test("empty array stays an empty array", () => {
        expect(ObjectFacade.serialize([])).toEqual([]);
    });

    test("string coercion", () => {
        expect(ObjectFacade.serialize("true")).toBe(true);
        expect(ObjectFacade.serialize("false")).toBe(false);
        expect(ObjectFacade.serialize("123")).toBe(123);
        expect(ObjectFacade.serialize("12.5")).toBe(12.5);
        expect(ObjectFacade.serialize("hello")).toBe("hello");
    });

    test("dates normalize to ISO strings", () => {
        const date = new Date("2024-01-01T00:00:00.000Z");

        expect(ObjectFacade.serialize(date)).toBe(date.toISOString());
    });

    test("nested objects are normalized recursively", () => {
        expect(ObjectFacade.serialize({a: "1", b: {c: "2"}})).toEqual({a: 1, b: {c: 2}});
    });

    test("arrays are normalized element-wise", () => {
        expect(ObjectFacade.serialize(["1", "2"])).toEqual([1, 2]);
    });
});

describe("Object key helpers", () => {
    test("only keeps the given keys", () => {
        expect(ObjectFacade.only({a: 1, b: 2, c: 3}, ["a", "c"])).toEqual({a: 1, c: 3});
    });

    test("only ignores missing keys", () => {
        expect(ObjectFacade.only({a: 1}, ["a", "z"])).toEqual({a: 1});
    });

    test("except removes the given keys", () => {
        expect(ObjectFacade.except({a: 1, b: 2, c: 3}, ["b"])).toEqual({a: 1, c: 3});
    });

    test("except returns original when no keys match", () => {
        expect(ObjectFacade.except({a: 1}, ["z"])).toEqual({a: 1});
    });

    test("first returns the first property value", () => {
        expect(ObjectFacade.first({a: 1, b: 2})).toBe(1);
    });

    test("first returns undefined for empty object", () => {
        expect(ObjectFacade.first({})).toBeUndefined();
    });

    test("last returns the last property value", () => {
        expect(ObjectFacade.last({a: 1, b: 2})).toBe(2);
    });

    test("last returns undefined for empty object", () => {
        expect(ObjectFacade.last({})).toBeUndefined();
    });
});

describe("Object.parseFormData", () => {
    const log = mock(console.log);
    const error = mock(console.error);

    beforeEach(() => {
        log.mockReset();
        error.mockReset();
        console.log = log;
        console.error = error;
    });

    afterEach(() => {
        console.log = console.log;
        console.error = console.error;
    });

    test("parses nested keys (raw)", () => {
        const form = new FormData();
        form.append("user[name]", "John");
        form.append("user[age]", "30");

        expect(ObjectFacade.parseFormData(form, true)).toEqual({
            user: {name: "John", age: "30"}
        });
    });

    test("parses numeric-indexed array keys", () => {
        const form = new FormData();
        form.append("items[0]", "a");
        form.append("items[1]", "b");

        expect(ObjectFacade.parseFormData(form, true)).toEqual({items: ["a", "b"]});
    });

    test("normalizes values when raw is false", () => {
        const form = new FormData();
        form.append("age", "30");

        expect(ObjectFacade.parseFormData(form)).toEqual({age: 30});
    });

    test("throws for non-FormData input", () => {
        expect(() => ObjectFacade.parseFormData("not form data" as any)).toThrow();
    });
});
