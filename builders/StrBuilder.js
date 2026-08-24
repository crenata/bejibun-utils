import { defineValue, isNotEmpty } from "../utils/utils";
/**
 * Fluent builder for transforming string values.
 *
 * Each transform method mutates the internal value and returns either the
 * builder instance (for chaining) or the final string, depending on the
 * `combine` flag.
 */
export default class StrBuilder {
    value;
    constructor() {
        this.value = "";
    }
    /**
     * Sets the working string value.
     *
     * @param {string} value - The value to assign.
     * @returns {StrBuilder} The current builder instance.
     */
    setValue(value) {
        this.value = value;
        return this;
    }
    /**
     * Generates a random alphanumeric string.
     *
     * @param {number} size - The length of the string to generate (defaults to 32).
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or the random string.
     */
    random(size, combine) {
        this.value = [...Array(defineValue(size, 32))]
            .map(() => {
            return ((Math.random() * 36) | 0).toString(36);
        })
            .join("");
        if (isNotEmpty(combine))
            return this;
        return this.value;
    }
    /**
     * Converts the value into a filesystem-safe file name by replacing
     * separators (dots, colons, slashes) with underscores and trimming.
     *
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or the sanitized string.
     */
    ipToFileName(combine) {
        this.value = defineValue(this.value
            .trim()
            .replace(/[.:/]/g, "_")
            .replace(/_+/g, "_")
            .replace(/^_+|_+$/g, ""), "unknown");
        if (isNotEmpty(combine))
            return this;
        return this.value;
    }
    /**
     * Converts the value to uppercase.
     *
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or the uppercased string.
     */
    toUpperCase(combine) {
        this.value = this.value.toUpperCase();
        if (isNotEmpty(combine))
            return this;
        return this.value;
    }
    /**
     * Converts the value to lowercase.
     *
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or the lowercased string.
     */
    toLowerCase(combine) {
        this.value = this.value.toLowerCase();
        if (isNotEmpty(combine))
            return this;
        return this.value;
    }
    /**
     * Converts the value to PascalCase.
     *
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or the PascalCased string.
     */
    toPascalCase(combine) {
        this.value = defineValue(this.value.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g), [])
            .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
            .join("");
        if (isNotEmpty(combine))
            return this;
        return this.value;
    }
    /**
     * Converts the given string to snake_case.
     * Acronyms (e.g. "HTTPRequest") keep their lowercase form after the first
     * split boundary.
     *
     * @param {string} delimiter - The separator between words (defaults to "_").
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or the snake-cased string.
     */
    toSnakeCase(delimiter = "_", combine) {
        this.value = this.value
            .replace(/([a-z0-9])([A-Z])/g, `$1${delimiter}$2`)
            .replace(/([A-Z]+)([A-Z][a-z])/g, `$1${delimiter}$2`)
            .toLowerCase();
        if (isNotEmpty(combine))
            return this;
        return this.value;
    }
    /**
     * Converts the given string to camelCase.
     *
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or the camelCased string.
     */
    toCamelCase(combine) {
        const [first, ...rest] = this.value.split(/[_-]/);
        this.value =
            first.toLowerCase() +
                rest.map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join("");
        if (isNotEmpty(combine))
            return this;
        return this.value;
    }
    /**
     * Determines whether the value starts with any of the given needles.
     *
     * @param {string | Array<string>} needles - A single prefix or a list of prefixes.
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | boolean} The builder or the boolean result.
     */
    startsWith(needles, combine) {
        const list = Array.isArray(needles) ? needles : [needles];
        const result = list.some((needle) => this.value.startsWith(needle));
        this.value = String(result);
        if (isNotEmpty(combine))
            return this;
        return result;
    }
    /**
     * Determines whether the value ends with any of the given needles.
     *
     * @param {string | Array<string>} needles - A single suffix or a list of suffixes.
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | boolean} The builder or the boolean result.
     */
    endsWith(needles, combine) {
        const list = Array.isArray(needles) ? needles : [needles];
        const result = list.some((needle) => this.value.endsWith(needle));
        this.value = String(result);
        if (isNotEmpty(combine))
            return this;
        return result;
    }
    /**
     * Determines whether the value contains any of the given needles as a substring.
     *
     * @param {string | Array<string>} needles - A single substring or a list of substrings.
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | boolean} The builder or the boolean result.
     */
    contains(needles, combine) {
        const list = Array.isArray(needles) ? needles : [needles];
        const result = list.some((needle) => this.value.includes(needle));
        this.value = String(result);
        if (isNotEmpty(combine))
            return this;
        return result;
    }
}
