import {DateTime, Duration, Interval} from "luxon";

export default class Luxon {
    public static get datetime(): typeof DateTime {
        return DateTime;
    }

    public static get duration(): typeof Duration {
        return Duration;
    }

    public static get interval(): typeof Interval {
        return Interval;
    }
}