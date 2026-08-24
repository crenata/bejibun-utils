import StrBuilder from "../builders/StrBuilder";
/**
 * Static facade over StrBuilder for common string transformations.
 */
export default class Str {
    /**
     * Generates a random alphanumeric string.
     *
     * @param {number} size - The length of the random string (defaults to 32).
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or the random string.
     */
    static random(size?: number, combine?: boolean): StrBuilder | string;
    /**
     * Converts the given string into a filesystem-safe file name.
     *
     * @param {string} value - The string to sanitize.
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or the sanitized string.
     */
    static ipToFileName(value: string, combine?: boolean): StrBuilder | string;
    /**
     * Converts the given string to uppercase.
     *
     * @param {string} value - The string to uppercase.
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or uppercased string.
     */
    static toUpperCase(value: string, combine?: boolean): StrBuilder | string;
    /**
     * Converts the given string to lowercase.
     *
     * @param {string} value - The string to lowercase.
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or lowercased string.
     */
    static toLowerCase(value: string, combine?: boolean): StrBuilder | string;
    /**
     * Converts the given string to PascalCase.
     *
     * @param {string} value - The string to convert to PascalCase.
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or PascalCased string.
     */
    static toPascalCase(value: string, combine?: boolean): StrBuilder | string;
    /**
     * Converts the given string to snake_case.
     *
     * @param {string} value - The string to convert.
     * @param {string} delimiter - The separator between words (defaults to "_").
     * @returns {StrBuilder | string} The builder or snake_cased string.
     */
    static toSnakeCase(value: string, delimiter?: string): StrBuilder | string;
    /**
     * Converts the given string to camelCase.
     *
     * @param {string} value - The string to convert.
     * @returns {StrBuilder | string} The builder or camelCased string.
     */
    static toCamelCase(value: string): StrBuilder | string;
    /**
     * Determines whether the string starts with any of the given needles.
     *
     * @param {string} value - The string to inspect.
     * @param {string | Array<string>} needles - A single prefix or a list of prefixes.
     * @returns {boolean} True when the string starts with at least one needle.
     */
    static startsWith(value: string, needles: string | Array<string>): StrBuilder | boolean;
    /**
     * Determines whether the string ends with any of the given needles.
     *
     * @param {string} value - The string to inspect.
     * @param {string | Array<string>} needles - A single suffix or a list of suffixes.
     * @returns {boolean} True when the string ends with at least one needle.
     */
    static endsWith(value: string, needles: string | Array<string>): StrBuilder | boolean;
    /**
     * Determines whether the string contains any of the given needles as a substring.
     *
     * @param {string} value - The string to inspect.
     * @param {string | Array<string>} needles - A single substring or a list of substrings.
     * @returns {boolean} True when the string contains at least one needle.
     */
    static contains(value: string, needles: string | Array<string>): StrBuilder | boolean;
}
