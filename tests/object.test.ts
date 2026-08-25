import {describe, it, expect} from "bun:test";
import ObjectFacade from "../src/facades/Object";

describe("Object.serialize", () => {
    it("converts empty string to null", () => {
        expect(ObjectFacade.serialize({name: ""})).toEqual({name: null});
    });
    it("converts 'true' to boolean", () => {
        expect(ObjectFacade.serialize({active: "true"})).toEqual({active: true});
    });
    it("converts 'false' to boolean", () => {
        expect(ObjectFacade.serialize({active: "false"})).toEqual({active: false});
    });
    it("converts numeric string to number", () => {
        expect(ObjectFacade.serialize({age: "30"})).toEqual({age: 30});
    });
    it("converts empty object to empty object", () => {
        expect(ObjectFacade.serialize({data: {}})).toEqual({data: {}});
    });
    it("converts Date to ISO string", () => {
        const d = new Date("2025-01-15T12:00:00Z");
        expect(ObjectFacade.serialize({date: d})).toEqual({date: "2025-01-15T12:00:00.000Z"});
    });
    it("handles null Date", () => {
        expect(ObjectFacade.serialize({date: new Date("invalid")})).toEqual({date: null});
    });
    it("trims whitespace", () => {
        expect(ObjectFacade.serialize({name: "  hello  "})).toEqual({name: "hello"});
    });
    it("preserves non-empty strings", () => {
        expect(ObjectFacade.serialize({name: "John"})).toEqual({name: "John"});
    });
});

describe("Object.only", () => {
    it("picks specified keys", () => {
        const obj = {a: 1, b: 2, c: 3};
        expect(ObjectFacade.only(obj, ["a", "c"])).toEqual({a: 1, c: 3});
    });
    it("ignores missing keys", () => {
        expect(ObjectFacade.only({a: 1}, ["a", "z"])).toEqual({a: 1});
    });
});

describe("Object.except", () => {
    it("excludes specified keys", () => {
        const obj = {a: 1, b: 2, c: 3};
        expect(ObjectFacade.except(obj, ["b"])).toEqual({a: 1, c: 3});
    });
});

describe("Object.first", () => {
    it("returns first value", () => {
        expect(ObjectFacade.first({a: 1, b: 2})).toBe(1);
    });
    it("returns undefined for empty", () => {
        expect(ObjectFacade.first({})).toBeUndefined();
    });
});

describe("Object.last", () => {
    it("returns last value", () => {
        expect(ObjectFacade.last({a: 1, b: 2})).toBe(2);
    });
    it("returns undefined for empty", () => {
        expect(ObjectFacade.last({})).toBeUndefined();
    });
});

describe("Object.parseFormData", () => {
    it("parses flat FormData", () => {
        const fd = new FormData();
        fd.append("name", "John");
        fd.append("age", "30");
        const result = ObjectFacade.parseFormData(fd);
        expect(result.name).toBe("John");
        expect(result.age).toBe(30);
    });
    it("raw mode returns strings", () => {
        const fd = new FormData();
        fd.append("age", "30");
        const result = ObjectFacade.parseFormData(fd, true);
        expect(result.age).toBe("30");
    });
    it("handles bracket notation", () => {
        const fd = new FormData();
        fd.append("user[name]", "John");
        const result = ObjectFacade.parseFormData(fd);
        expect(result.user).toEqual({name: "John"});
    });
});
