import { DateTime as LuxonDateTime, Duration as LuxonDuration, Interval as LuxonInterval } from "luxon";
export default class Luxon {
    static get DateTime(): typeof LuxonDateTime;
    static get Duration(): typeof LuxonDuration;
    static get Interval(): typeof LuxonInterval;
}
