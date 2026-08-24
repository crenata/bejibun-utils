/**
 * Fluent builder for transforming string values.
 *
 * Each transform method mutates the internal value and returns either the
 * builder instance (for chaining) or the final string, depending on the
 * `combine` flag.
 */
export default class StrBuilder {
    protected value: string;
    constructor();
    /**
     * Sets the working string value.
     *
     * @param {string} value - The value to assign.
     * @returns {StrBuilder} The current builder instance.
     */
    setValue(value: string): StrBuilder;
    /**
     * Generates a random alphanumeric string.
     *
     * @param {number} size - The length of the string to generate (defaults to 32).
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or the random string.
     */
    random(size?: number, combine?: boolean): StrBuilder | string;
    /**
     * Converts the value into a filesystem-safe file name by replacing
     * separators (dots, colons, slashes) with underscores and trimming.
     *
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or the sanitized string.
     */
    ipToFileName(combine?: boolean): StrBuilder | string;
    /**
     * Converts the value to uppercase.
     *
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or the uppercased string.
     */
    toUpperCase(combine?: boolean): StrBuilder | string;
    /**
     * Converts the value to lowercase.
     *
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or the lowercased string.
     */
    toLowerCase(combine?: boolean): StrBuilder | string;
    /**
     * Converts the value to PascalCase.
     *
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or the PascalCased string.
     */
    toPascalCase(combine?: boolean): StrBuilder | string;
    /**
     * Converts the given string to snake_case.
     * Acronyms (e.g. "HTTPRequest") keep their lowercase form after the first
     * split boundary.
     *
     * @param {string} delimiter - The separator between words (defaults to "_").
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or the snake-cased string.
     */
    toSnakeCase(delimiter?: string, combine?: boolean): StrBuilder | string;
    /**
     * Converts the given string to camelCase.
     *
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or the camelCased string.
     */
    toCamelCase(combine?: boolean): StrBuilder | string;
    /**
     * Determines whether the value starts with any of the given needles.
     *
     * @param {string | Array<string>} needles - A single prefix or a list of prefixes.
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | boolean} The builder or the boolean result.
     */
    startsWith(needles: string | Array<string>, combine?: boolean): StrBuilder | boolean;
    /**
     * Determines whether the value ends with any of the given needles.
     *
     * @param {string | Array<string>} needles - A single suffix or a list of suffixes.
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | boolean} The builder or the boolean result.
     */
    endsWith(needles: string | Array<string>, combine?: boolean): StrBuilder | boolean;
    /**
     * Determines whether the value contains any of the given needles as a substring.
     *
     * @param {string | Array<string>} needles - A single substring or a list of substrings.
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | boolean} The builder or the boolean result.
     */
    contains(needles: string | Array<string>, combine?: boolean): StrBuilder | boolean;
}
