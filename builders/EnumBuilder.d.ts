import type { EnumItem } from "../types/enum";
/**
 * Fluent builder that provides lookup helpers over a single enum definition.
 */
export default class EnumBuilder {
    /** The enum object being introspected. */
    protected enums: any;
    /**
     * Creates a builder for the given enum.
     *
     * @param {any} enums - The enum object to introspect.
     */
    constructor(enums: any);
    /**
     * Resolves the enum key for a given value.
     *
     * @param {any} value - The enum value to look up.
     * @returns {string | undefined} The matching key, or undefined.
     */
    getKey(value: any): string | undefined;
    /**
     * Resolves the enum value for a given key.
     *
     * @param {string} key - The enum key to look up.
     * @returns {any} The matching value, or undefined.
     */
    getValue(key: string): any;
    /**
     * Whether the enum contains a given value.
     *
     * @param {any} value - The enum value to check.
     * @returns {boolean} True when the value exists in the enum.
     */
    hasValue(value: any): boolean;
    /**
     * Whether the enum contains a given key.
     *
     * @param {string} key - The enum key to check.
     * @returns {boolean} True when the key exists in the enum.
     */
    hasKey(key: string): boolean;
    /**
     * Returns all key/value pairs of the enum as an array of items.
     *
     * @returns {Array<EnumItem>} The enum contents as `EnumItem` records.
     */
    toArray(): Array<EnumItem>;
}
