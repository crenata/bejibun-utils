import {expect, test, describe} from "bun:test";
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
