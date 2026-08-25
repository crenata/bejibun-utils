import {describe, it, expect} from "bun:test";
import Arr from "../src/facades/Arr";

const data = [
    {id: 1, name: "Alice", role: "admin"},
    {id: 2, name: "Bob", role: "user"},
    {id: 3, name: "Charlie", role: "user"},
];

describe("Arr.only", () => {
    it("picks elements at specified indices", () => {
        const result = Arr.only(data, ["0", "2"]);
        expect(result).toEqual([data[0], data[2]]);
    });
    it("returns empty when no indices match", () => {
        const result = Arr.only(data, ["99"]);
        expect(result).toEqual([]);
    });
});

describe("Arr.except", () => {
    it("excludes elements at specified indices", () => {
        const result = Arr.except(data, ["1"]);
        expect(result).toEqual([data[0], data[2]]);
    });
});

describe("Arr.first", () => {
    it("returns first element", () => {
        expect(Arr.first(data)).toEqual(data[0]);
    });
    it("returns undefined for empty array", () => {
        expect(Arr.first([])).toBeUndefined();
    });
});

describe("Arr.last", () => {
    it("returns last element", () => {
        expect(Arr.last(data)).toEqual(data[2]);
    });
    it("returns undefined for empty array", () => {
        expect(Arr.last([])).toBeUndefined();
    });
});

describe("Arr.pluck", () => {
    it("extracts values for key", () => {
        expect(Arr.pluck(data, "name")).toEqual(["Alice", "Bob", "Charlie"]);
    });
    it("returns undefined for missing key", () => {
        expect(Arr.pluck(data, "missing")).toEqual([undefined, undefined, undefined]);
    });
});
