/**
 * Facade exposing Luxon types via lazy getters.
 *
 * Luxon is required only when a getter is accessed, so merely importing this
 * facade does not pay Luxon's cold-start cost.
 */
export default class Luxon {
    /**
     * @returns {typeof import("luxon").DateTime} The Luxon DateTime type.
     */
    public static get DateTime() {
        return require("luxon").DateTime;
    }

    /**
     * @returns {typeof import("luxon").Duration} The Luxon Duration type.
     */
    public static get Duration() {
        return require("luxon").Duration;
    }

    /**
     * @returns {typeof import("luxon").Interval} The Luxon Interval type.
     */
    public static get Interval() {
        return require("luxon").Interval;
    }
}
