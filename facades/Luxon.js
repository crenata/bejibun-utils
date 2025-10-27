import { DateTime as LuxonDateTime, Duration as LuxonDuration, Interval as LuxonInterval } from "luxon";
export default class Luxon {
    static get DateTime() {
        return LuxonDateTime;
    }
    static get Duration() {
        return LuxonDuration;
    }
    static get Interval() {
        return LuxonInterval;
    }
}
