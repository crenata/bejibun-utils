import { DateTime, Duration, Interval } from "luxon";
export default class Luxon {
    static get datetime(): typeof DateTime;
    static get duration(): typeof Duration;
    static get interval(): typeof Interval;
}
