import {expect, test, describe} from "bun:test";
import HttpMethodEnum from "../src/enums/HttpMethodEnum";
import Enum from "../src/facades/Enum";

describe("Enum", () => {
    const builder = Enum.setEnums(HttpMethodEnum);

    test("getValue", () => {
        expect(builder.getValue("Get")).toBe("GET");
        expect(builder.getValue("Post")).toBe("POST");
    });

    test("getKey", () => {
        expect(builder.getKey("GET")).toBe("Get");
        expect(builder.getKey("NOPE")).toBeUndefined();
    });

    test("hasValue", () => {
        expect(builder.hasValue("POST")).toBe(true);
        expect(builder.hasValue("NOPE")).toBe(false);
    });

    test("hasKey", () => {
        expect(builder.hasKey("Post")).toBe(true);
        expect(builder.hasKey("Nope")).toBe(false);
    });

    test("toArray", () => {
        const arr = builder.toArray();

        expect(arr).toHaveLength(9);
        expect(arr[0]).toEqual({name: "Connect", value: "CONNECT"});
        expect(arr[8]).toEqual({name: "Trace", value: "TRACE"});
    });
});

describe("EnumBuilder across enums", () => {
    test("same key name in different enums does not collide", () => {
        const first = Enum.setEnums({Status: "active"});
        const second = Enum.setEnums({Status: "inactive"});

        expect(first.getKey("active")).toBe("Status");
        expect(second.getKey("inactive")).toBe("Status");
        expect(first.getKey("inactive")).toBeUndefined();
        expect(second.getKey("active")).toBeUndefined();
    });
});
