import {describe, it, expect} from "bun:test";
import {isEmpty, isNotEmpty, defineValue} from "../src/utils/utils";

describe("isEmpty", () => {
    it("empty string", () => expect(isEmpty("")).toBe(true));
    it("whitespace only", () => expect(isEmpty("   ")).toBe(true));
    it("non-empty string", () => expect(isEmpty("hello")).toBe(false));
    it("null", () => expect(isEmpty(null)).toBe(true));
    it("undefined", () => expect(isEmpty(undefined)).toBe(true));
    it("zero", () => expect(isEmpty(0)).toBe(true));
    it("false", () => expect(isEmpty(false)).toBe(true));
    it("empty array", () => expect(isEmpty([])).toBe(true));
    it("non-empty array", () => expect(isEmpty([1])).toBe(false));
    it("empty object", () => expect(isEmpty({})).toBe(true));
    it("non-empty object", () => expect(isEmpty({a: 1})).toBe(false));
    it("empty Map", () => expect(isEmpty(new Map())).toBe(true));
    it("empty Set", () => expect(isEmpty(new Set())).toBe(true));
    it("number 1", () => expect(isEmpty(1)).toBe(false));
    it("truthy string", () => expect(isEmpty("0")).toBe(false));
});

describe("isNotEmpty", () => {
    it("non-empty string", () => expect(isNotEmpty("hello")).toBe(true));
    it("empty string", () => expect(isNotEmpty("")).toBe(false));
    it("null", () => expect(isNotEmpty(null)).toBe(false));
});

describe("defineValue", () => {
    it("returns value when provided", () => expect(defineValue("hello", "default")).toBe("hello"));
    it("returns default when null", () => expect(defineValue(null, "default")).toBe("default"));
    it("returns default when undefined", () => expect(defineValue(undefined, "default")).toBe("default"));
    it("returns default for zero (empty)", () => expect(defineValue(0, "default")).toBe("default"));
    it("returns default for false (empty)", () => expect(defineValue(false, "default")).toBe("default"));
    it("returns default for empty string", () => expect(defineValue("", "default")).toBe("default"));
    it("returns value for non-empty number", () => expect(defineValue(42, "default")).toBe(42));
    it("returns value for true", () => expect(defineValue(true, "default")).toBe(true));
});
