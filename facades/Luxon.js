import { DateTime, Duration, Interval } from "luxon";
export default class Luxon {
    static get datetime() {
        return DateTime;
    }
    static get duration() {
        return Duration;
    }
    static get interval() {
        return Interval;
    }
}
