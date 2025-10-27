import {
    DateTime as LuxonDateTime,
    Duration as LuxonDuration,
    Interval as LuxonInterval
} from "luxon";

export default class Luxon {
    public static get DateTime(): typeof LuxonDateTime {
        return LuxonDateTime;
    }

    public static get Duration(): typeof LuxonDuration {
        return LuxonDuration;
    }

    public static get Interval(): typeof LuxonInterval {
        return LuxonInterval;
    }
}