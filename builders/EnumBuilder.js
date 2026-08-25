import EnumException from "../exceptions/EnumException";
import { isEmpty, isNotEmpty } from "../utils/utils";
/**
 * Fluent builder that provides lookup helpers over a single enum definition.
 */
export default class EnumBuilder {
    /** The enum object being introspected. */
    enums;
    /**
     * Creates a builder for the given enum.
     *
     * @param {any} enums - The enum object to introspect.
     */
    constructor(enums) {
        if (isEmpty(enums))
            throw new EnumException("The enum parameter is required.");
        this.enums = enums;
    }
    /**
     * Resolves the enum key for a given value.
     *
     * @param {any} value - The enum value to look up.
     * @returns {string | undefined} The matching key, or undefined.
     */
    getKey(value) {
        return Object.keys(this.enums).find((item) => this.enums[item] === value);
    }
    /**
     * Resolves the enum value for a given key.
     *
     * @param {string} key - The enum key to look up.
     * @returns {any} The matching value, or undefined.
     */
    getValue(key) {
        return this.enums[key];
    }
    /**
     * Whether the enum contains a given value.
     *
     * @param {any} value - The enum value to check.
     * @returns {boolean} True when the value exists in the enum.
     */
    hasValue(value) {
        return isNotEmpty(this.getKey(value));
    }
    /**
     * Whether the enum contains a given key.
     *
     * @param {string} key - The enum key to check.
     * @returns {boolean} True when the key exists in the enum.
     */
    hasKey(key) {
        return isNotEmpty(this.getValue(key));
    }
    /**
     * Returns all key/value pairs of the enum as an array of items.
     *
     * @returns {Array<EnumItem>} The enum contents as `EnumItem` records.
     */
    toArray() {
        return Object.keys(this.enums).map((key) => ({
            name: key,
            value: this.getValue(key)
        }));
    }
}
