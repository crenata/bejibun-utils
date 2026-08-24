import {expect, test, describe} from "bun:test";
import Luxon from "../src/facades/Luxon";

describe("Luxon facade", () => {
    test("DateTime is available", () => {
        const now = Luxon.DateTime.now();

        expect(now.isValid).toBe(true);
    });

    test("Duration is available", () => {
        expect(typeof Luxon.Duration.fromMillis).toBe("function");
    });

    test("Interval is available", () => {
        expect(typeof Luxon.Interval.fromDateTimes).toBe("function");
    });
});
