/**
 * Fluent builder for normalizing raw data (FormData, plain values, Date/Luxon
 * instances) into a consistent, JSON-friendly structure.
 */
export default class ObjectBuilder {
    /** The raw data object under transformation. */
    protected value: Record<string, any>;
    constructor();
    /**
     * Sets the value under transformation.
     *
     * @param {any} value - The value to assign.
     * @returns {ObjectBuilder} The current builder instance.
     */
    setValue(value: Record<string, any>): ObjectBuilder;
    /**
     * Returns a new object containing only the specified keys.
     *
     * @param {Array<string>} keys - The keys to retain.
     * @returns {Record<string, any>} A filtered copy containing only the given keys.
     */
    only(keys: Array<string>): Record<string, any>;
    /**
     * Returns a new object with the specified keys excluded.
     *
     * @param {Array<string>} keys - The keys to remove.
     * @returns {Record<string, any>} A filtered copy excluding the given keys.
     */
    except(keys: Array<string>): Record<string, any>;
    /**
     * Returns the first property value of the object.
     *
     * @returns {any | undefined} The first value, or undefined when empty.
     */
    first(): any | undefined;
    /**
     * Returns the last property value of the object.
     *
     * @returns {any | undefined} The last value, or undefined when empty.
     */
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
