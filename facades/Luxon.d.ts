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
    static get DateTime(): any;
    /**
     * @returns {typeof import("luxon").Duration} The Luxon Duration type.
     */
    static get Duration(): any;
    /**
     * @returns {typeof import("luxon").Interval} The Luxon Interval type.
     */
    static get Interval(): any;
}
