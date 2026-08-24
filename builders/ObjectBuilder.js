import ObjectException from "../exceptions/ObjectException";
import Luxon from "../facades/Luxon";
import { isEmpty, isNotEmpty } from "../utils/utils";
/**
 * Fluent builder for normalizing raw data (FormData, plain values, Date/Luxon
 * instances) into a consistent, JSON-friendly structure.
 */
export default class ObjectBuilder {
    value;
    constructor() {
        this.value = {};
    }
    /**
     * Sets the value under transformation.
     *
     * @param {any} value - The value to assign.
     * @returns {ObjectBuilder} The current builder instance.
     */
    setValue(value) {
        this.value = value;
        return this;
    }
    only(keys) {
        const result = {};
        for (const key of keys) {
            if (Object.prototype.hasOwnProperty.call(this.value, key)) {
                result[key] = this.value[key];
            }
        }
        return result;
    }
    except(keys) {
        const result = {};
        const blacklist = new Set(keys);
        for (const key of Object.keys(this.value)) {
            if (!blacklist.has(key)) {
                result[key] = this.value[key];
            }
        }
        return result;
    }
    first() {
        const keys = Object.keys(this.value);
        return keys.length ? this.value[keys[0]] : undefined;
    }
    last() {
        const keys = Object.keys(this.value);
        return keys.length ? this.value[keys[keys.length - 1]] : undefined;
    }
    /**
     * Normalizes the stored value into a JSON-friendly structure.
     *
     * @returns {any} The normalized value.
     */
    serialize() {
        return this.normalize(this.value);
    }
    /**
     * Parses a FormData instance into a nested object.
     *
     * @param {boolean} raw - When true, returns the raw parsed object without normalization.
     * @returns {Record<string, any>} The parsed form payload.
     */
    parseFormData(raw = false) {
        if (!(this.value instanceof FormData))
            throw new ObjectException("Invalid form data.");
        const result = {};
        for (const [key, value] of this.value.entries()) {
            const keys = key.replace(/]/g, "").split("[");
            let current = result;
            for (let i = 0; i < keys.length; i++) {
                const part = keys[i];
                const nextPart = keys[i + 1];
                if (i === keys.length - 1) {
                    if (current[part] === undefined)
                        current[part] = value;
                    else if (Array.isArray(current[part]))
                        current[part].push(value);
                }
                else {
                    const isArrayIndex = /^\d+$/.test(nextPart);
                    if (isEmpty(current[part]))
                        current[part] = isArrayIndex ? [] : {};
                    current = current[part];
                }
            }
        }
        return raw ? result : this.normalize(result);
    }
    /**
     * Recursively normalizes a value: dates/Luxon instances to ISO strings,
     * numeric/bool-like strings to primitives, empty containers to null.
     *
     * @param {any} obj - The value to normalize.
     * @returns {any} The normalized value.
     */
    normalize(obj) {
        if (Array.isArray(obj))
            return obj.map(this.normalize);
        if (obj === null || obj === undefined)
            return null;
        if (obj instanceof Luxon.DateTime)
            return obj.isValid ? obj.toISO() : null;
        if (obj instanceof Date)
            return Number.isNaN(obj.getTime()) ? null : obj.toISOString();
        if (isNotEmpty(obj) &&
            typeof obj === "object" &&
            !(obj instanceof File) &&
            Object.keys(obj).length === 0)
            return null;
        if (isNotEmpty(obj) && typeof obj === "object" && !(obj instanceof File)) {
            const normalized = {};
            Object.keys(obj).forEach((key) => {
                normalized[key] = this.normalize(obj[key]);
            });
            return normalized;
        }
        if (typeof obj === "string") {
            const trimmed = obj.trim();
            if (trimmed === "")
                return null;
            if (trimmed === "true")
                return true;
            if (trimmed === "false")
                return false;
            const num = Number(trimmed);
            if (!Number.isNaN(num) && trimmed === num.toString())
                return num;
            return trimmed;
        }
        return obj;
    }
}
