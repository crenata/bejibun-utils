import ObjectBuilder from "../builders/ObjectBuilder";
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
    static serialize(value) {
        return new ObjectBuilder().setValue(value).serialize();
    }
    static only(value, keys) {
        return new ObjectBuilder().setValue(value).only(keys);
    }
    static except(value, keys) {
        return new ObjectBuilder().setValue(value).except(keys);
    }
    static first(value) {
        return new ObjectBuilder().setValue(value).first();
    }
    static last(value) {
        return new ObjectBuilder().setValue(value).last();
    }
    /**
     * Parses a FormData instance into a nested object.
     *
     * @param {FormData} value - The form data to parse.
     * @param {boolean} raw - When true, skips normalization of the result.
     * @returns {any} The parsed form payload.
     */
    static parseFormData(value, raw = false) {
        return new ObjectBuilder().setValue(value).parseFormData(raw);
    }
}
