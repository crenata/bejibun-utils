/**
 * Facade exposing Luxon types via lazy getters.
 *
 * Luxon is required only when a getter is accessed, so merely importing this
 * facade does not pay Luxon's cold-start cost. The underlying module is
 * cached after first access.
 */
let _luxon: any = null;

function luxon(): any {
    if (!_luxon) _luxon = require("luxon");

    return _luxon;
}

export default class Luxon {
    /**
     * Accesses the Luxon DateTime type.
     *
     * @returns {typeof import("luxon").DateTime} The Luxon DateTime type.
     */
    public static get DateTime() {
        return luxon().DateTime;
    }

    /**
     * Accesses the Luxon Duration type.
     *
     * @returns {typeof import("luxon").Duration} The Luxon Duration type.
     */
    public static get Duration() {
        return luxon().Duration;
    }

    /**
     * Accesses the Luxon Interval type.
     *
     * @returns {typeof import("luxon").Interval} The Luxon Interval type.
     */
    public static get Interval() {
        return luxon().Interval;
    }
}
