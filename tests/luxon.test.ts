import {describe, it, expect} from "bun:test";
import Luxon from "../src/facades/Luxon";

describe("Luxon.DateTime", () => {
    it("is accessible", () => {
        expect(Luxon.DateTime).toBeDefined();
    });
    it("can create instance", () => {
        const dt = Luxon.DateTime.now();
        expect(dt).toBeDefined();
        expect(typeof dt.toISO).toBe("function");
    });
    it("can parse ISO string", () => {
        const dt = Luxon.DateTime.fromISO("2025-01-15T12:00:00Z");
        expect(dt.isValid).toBe(true);
        expect(dt.toISO()).toContain("2025-01-15T12:00:00");
    });
    it("rejects invalid ISO", () => {
        const dt = Luxon.DateTime.fromISO("not-a-date");
        expect(dt.isValid).toBe(false);
    });
});

describe("Luxon.Duration", () => {
    it("is accessible", () => {
        expect(Luxon.Duration).toBeDefined();
    });
    it("can create duration", () => {
        const dur = Luxon.Duration.fromObject({hours: 2, minutes: 30});
        expect(dur.hours).toBe(2);
        expect(dur.minutes).toBe(30);
    });
});

describe("Luxon.Interval", () => {
    it("is accessible", () => {
        expect(Luxon.Interval).toBeDefined();
    });
});
