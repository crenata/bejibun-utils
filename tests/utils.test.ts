import {expect, test, describe} from "bun:test";
import {isEmpty, isNotEmpty, defineValue, isModuleExists, isCommandExists} from "../src/utils/utils";

describe("isEmpty", () => {
    test("undefined and null are empty", () => {
        expect(isEmpty(undefined)).toBe(true);
        expect(isEmpty(null)).toBe(true);
    });

    test("booleans", () => {
        expect(isEmpty(false)).toBe(true);
        expect(isEmpty(true)).toBe(false);
    });

    test("numbers", () => {
        expect(isEmpty(0)).toBe(true);
        expect(isEmpty(Number.NaN)).toBe(true);
        expect(isEmpty(1)).toBe(false);
        expect(isEmpty(-1)).toBe(false);
    });

    test("bigint", () => {
        expect(isEmpty(0n)).toBe(true);
        expect(isEmpty(1n)).toBe(false);
    });

    test("strings", () => {
        expect(isEmpty("")).toBe(true);
        expect(isEmpty("   ")).toBe(true);
        expect(isEmpty("hello")).toBe(false);
    });

    test("arrays", () => {
        expect(isEmpty([])).toBe(true);
        expect(isEmpty([1])).toBe(false);
    });

    test("maps and sets", () => {
        expect(isEmpty(new Map())).toBe(true);
        expect(isEmpty(new Set())).toBe(true);
        expect(isEmpty(new Map([["a", 1]]))).toBe(false);
        expect(isEmpty(new Set([1]))).toBe(false);
    });

    test("objects", () => {
        expect(isEmpty({})).toBe(true);
        expect(isEmpty({a: 1})).toBe(false);
    });

    test("non-empty primitives and functions", () => {
        expect(isEmpty(() => {})).toBe(false);
        expect(isEmpty(Symbol("x"))).toBe(false);
    });
});

describe("isNotEmpty", () => {
    test("inverts isEmpty", () => {
        expect(isNotEmpty("x")).toBe(true);
        expect(isNotEmpty("")).toBe(false);
        expect(isNotEmpty(null)).toBe(false);
    });
});

describe("defineValue", () => {
    test("returns the value when non-empty", () => {
        expect(defineValue("x", "fallback")).toBe("x");
        expect(defineValue(1, 2)).toBe(1);
    });

    test("returns the default when empty", () => {
        expect(defineValue("", "fallback")).toBe("fallback");
        expect(defineValue(null, "fallback")).toBe("fallback");
        expect(defineValue(0, "fallback")).toBe("fallback");
    });

    test("defaults to null when no default is given", () => {
        expect(defineValue(undefined)).toBe(null);
    });
});

describe("isModuleExists", () => {
    test("resolves installed modules", () => {
        expect(isModuleExists("luxon")).toBe(true);
    });

    test("returns false for missing modules", () => {
        expect(isModuleExists("definitely-not-a-module-xyz")).toBe(false);
    });
});

describe("isCommandExists", () => {
    test("finds a real command", () => {
        expect(isCommandExists("sh")).toBe(true);
    });

    test("returns false for a missing command", () => {
        expect(isCommandExists("definitely-not-a-command-xyz")).toBe(false);
    });
});
