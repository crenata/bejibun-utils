import {describe, it, expect} from "bun:test";
import EnumBuilder from "../src/builders/EnumBuilder";
import Enum from "../src/facades/Enum";

const colorEnum = new EnumBuilder({RED: "red", GREEN: "green", BLUE: "blue"});

describe("EnumBuilder", () => {
    it("getKey returns key for value", () => {
        expect(colorEnum.getKey("red")).toBe("RED");
    });
    it("getKey returns undefined for unknown value", () => {
        expect(colorEnum.getKey("yellow")).toBeUndefined();
    });
    it("getValue returns value for key", () => {
        expect(colorEnum.getValue("GREEN")).toBe("green");
    });
    it("getValue returns undefined for unknown key", () => {
        expect(colorEnum.getValue("YELLOW")).toBeUndefined();
    });
    it("hasValue returns true for existing value", () => {
        expect(colorEnum.hasValue("blue")).toBe(true);
    });
    it("hasValue returns false for missing value", () => {
        expect(colorEnum.hasValue("yellow")).toBe(false);
    });
    it("hasKey returns true for existing key", () => {
        expect(colorEnum.hasKey("RED")).toBe(true);
    });
    it("hasKey returns false for missing key", () => {
        expect(colorEnum.hasKey("YELLOW")).toBe(false);
    });
    it("toArray returns all items", () => {
        const arr = colorEnum.toArray();
        expect(arr).toHaveLength(3);
        expect(arr).toEqual([
            {name: "RED", value: "red"},
            {name: "GREEN", value: "green"},
            {name: "BLUE", value: "blue"},
        ]);
    });
});

describe("Enum static", () => {
    it("Enum.setEnums creates EnumBuilder", () => {
        const e = Enum.setEnums({FOO: "foo", BAR: "bar"});
        expect(e).toBeInstanceOf(EnumBuilder);
        expect(e.getValue("FOO")).toBe("foo");
    });
});
