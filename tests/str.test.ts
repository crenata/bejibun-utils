import {describe, expect, test} from "bun:test";
import StrBuilder from "../src/builders/StrBuilder";
import Str from "../src/facades/Str";

describe("Str", () => {
    test("toLowerCase", () => {
        expect(Str.toLowerCase("HELLO")).toBe("hello");
    });

    test("toUpperCase", () => {
        expect(Str.toUpperCase("hello")).toBe("HELLO");
    });

    test("toPascalCase", () => {
        expect(Str.toPascalCase("hello world")).toBe("HelloWorld");
        expect(Str.toPascalCase("hello-world")).toBe("HelloWorld");
        expect(Str.toPascalCase("hello_world")).toBe("HelloWorld");
    });

    test("random defaults to length 32", () => {
        expect(Str.random()).toHaveLength(32);
    });

    test("random honors a custom length", () => {
        expect(Str.random(10)).toHaveLength(10);
    });

    test("ipToFileName", () => {
        expect(Str.ipToFileName("192.168.1.1")).toBe("192_168_1_1");
    });

    test("ipToFileName falls back to unknown when blank", () => {
        expect(Str.ipToFileName("")).toBe("unknown");
    });

    test("toSnakeCase converts camelCase", () => {
        expect(Str.toSnakeCase("helloWorld")).toBe("hello_world");
    });

    test("toSnakeCase preserves acronyms", () => {
        expect(Str.toSnakeCase("HTTPRequest")).toBe("http_request");
    });

    test("toSnakeCase honors a custom delimiter", () => {
        expect(Str.toSnakeCase("helloWorld", "-")).toBe("hello-world");
    });

    test("toCamelCase converts snake_case", () => {
        expect(Str.toCamelCase("hello_world")).toBe("helloWorld");
    });

    test("toCamelCase converts kebab-case", () => {
        expect(Str.toCamelCase("hello-world")).toBe("helloWorld");
    });

    test("toCamelCase lowercases input without separators", () => {
        expect(Str.toCamelCase("HelloWorld")).toBe("helloworld");
    });

    test("startsWith true for matching prefix", () => {
        expect(Str.startsWith("hello world", "hello")).toBe(true);
    });

    test("startsWith false for non-matching prefix", () => {
        expect(Str.startsWith("hello world", "world")).toBe(false);
    });

    test("startsWith accepts an array of needles", () => {
        expect(Str.startsWith("hello world", ["hey", "hello"])).toBe(true);
        expect(Str.startsWith("hello world", ["hey", "no"])).toBe(false);
    });

    test("endsWith true for matching suffix", () => {
        expect(Str.endsWith("hello world", "world")).toBe(true);
    });

    test("endsWith false for non-matching suffix", () => {
        expect(Str.endsWith("hello world", "hello")).toBe(false);
    });

    test("endsWith accepts an array of needles", () => {
        expect(Str.endsWith("hello world", ["planet", "world"])).toBe(true);
    });

    test("contains true for substring", () => {
        expect(Str.contains("hello world", "wor")).toBe(true);
    });

    test("contains false for non-substring", () => {
        expect(Str.contains("hello world", "planet")).toBe(false);
    });

    test("contains accepts an array of needles", () => {
        expect(Str.contains("hello world", ["hey", "world"])).toBe(true);
        expect(Str.contains("hello world", ["hey", "mars"])).toBe(false);
    });
});

describe("StrBuilder", () => {
    test("returns the builder when combine is true", () => {
        const builder = new StrBuilder().setValue("HI").toLowerCase(true);

        expect(builder).toBeInstanceOf(StrBuilder);
        expect(builder.toLowerCase(true)).toBeInstanceOf(StrBuilder);
    });

    test("returns the string when combine is omitted", () => {
        expect(new StrBuilder().setValue("HI").toLowerCase()).toBe("hi");
    });
});
