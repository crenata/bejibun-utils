import {describe, expect, test} from "bun:test";
import ArrBuilder from "../src/builders/ArrBuilder";
import Arr from "../src/facades/Arr";

describe("Arr", () => {
    test("only keeps elements at the given indices", () => {
        expect(Arr.only(["x", "y", "z"], ["0", "2"])).toEqual(["x", "z"]);
    });

    test("except removes elements at the given indices", () => {
        expect(Arr.except(["x", "y", "z"], ["1"])).toEqual(["x", "z"]);
    });

    test("first returns the first element", () => {
        expect(Arr.first([1, 2, 3])).toBe(1);
    });

    test("first returns undefined for empty array", () => {
        expect(Arr.first([])).toBeUndefined();
    });

    test("last returns the last element", () => {
        expect(Arr.last([1, 2, 3])).toBe(3);
    });

    test("last returns undefined for empty array", () => {
        expect(Arr.last([])).toBeUndefined();
    });

    test("pluck extracts a property from a list of objects", () => {
        expect(Arr.pluck([{name: "a"}, {name: "b"}], "name")).toEqual(["a", "b"]);
    });

    test("pluck returns undefined for missing property", () => {
        expect(Arr.pluck([{name: "a"}, {age: 2}], "name")).toEqual(["a", undefined]);
    });
});

describe("ArrBuilder", () => {
    test("setValues is chainable", () => {
        const builder = new ArrBuilder().setValues([1, 2, 3]);

        expect(builder).toBeInstanceOf(ArrBuilder);
        expect(builder.first()).toBe(1);
    });

    test("setValues throws for non-array input", () => {
        expect(() => new ArrBuilder().setValues("not an array" as any)).toThrow();
    });

    test("only and except are chainable via setValues", () => {
        expect(new ArrBuilder().setValues(["a", "b", "c"]).only(["0"])).toEqual(["a"]);
        expect(new ArrBuilder().setValues(["a", "b", "c"]).except(["0"])).toEqual(["b", "c"]);
    });
});
