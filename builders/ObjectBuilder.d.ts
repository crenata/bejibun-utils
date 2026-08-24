/**
 * Fluent builder for normalizing raw data (FormData, plain values, Date/Luxon
 * instances) into a consistent, JSON-friendly structure.
 */
export default class ObjectBuilder {
    protected value: Record<string, any>;
    constructor();
    /**
     * Sets the value under transformation.
     *
     * @param {any} value - The value to assign.
     * @returns {ObjectBuilder} The current builder instance.
     */
    setValue(value: Record<string, any>): ObjectBuilder;
    only(keys: Array<string>): Record<string, any>;
    except(keys: Array<string>): Record<string, any>;
    first(): any | undefined;
    last(): any | undefined;
    /**
     * Normalizes the stored value into a JSON-friendly structure.
     *
     * @returns {any} The normalized value.
     */
    serialize(): any;
    /**
     * Parses a FormData instance into a nested object.
     *
     * @param {boolean} raw - When true, returns the raw parsed object without normalization.
     * @returns {Record<string, any>} The parsed form payload.
     */
    parseFormData(raw?: boolean): Record<string, any>;
    /**
     * Recursively normalizes a value: dates/Luxon instances to ISO strings,
     * numeric/bool-like strings to primitives, empty containers to null.
     *
     * @param {any} obj - The value to normalize.
     * @returns {any} The normalized value.
     */
    private normalize;
}
