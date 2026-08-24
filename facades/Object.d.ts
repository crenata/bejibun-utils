/**
 * Static facade over ObjectBuilder for payload normalization and parsing.
 */
export default class Object {
    /**
     * Serializes the given value into a normalized, JSON-friendly structure.
     *
     * @param {any} value - The value to serialize.
     * @returns {any} The normalized value.
     */
    static serialize(value: Record<string, any>): any;
    static only(value: Record<string, any>, keys: Array<string>): Record<string, any>;
    static except(value: Record<string, any>, keys: Array<string>): Record<string, any>;
    static first(value: Record<string, any>): any | undefined;
    static last(value: Record<string, any>): any | undefined;
    /**
     * Parses a FormData instance into a nested object.
     *
     * @param {FormData} value - The form data to parse.
     * @param {boolean} raw - When true, skips normalization of the result.
     * @returns {any} The parsed form payload.
     */
    static parseFormData(value: FormData, raw?: boolean): any;
}
