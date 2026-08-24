import StrBuilder from "@/builders/StrBuilder";

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
    public static random(size?: number, combine?: boolean): StrBuilder | string {
        return new StrBuilder().random(size, combine);
    }

    /**
     * Converts the given string into a filesystem-safe file name.
     *
     * @param {string} value - The string to sanitize.
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or the sanitized string.
     */
    public static ipToFileName(value: string, combine?: boolean): StrBuilder | string {
        return new StrBuilder().setValue(value).ipToFileName(combine);
    }

    /**
     * Converts the given string to uppercase.
     *
     * @param {string} value - The string to uppercase.
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or uppercased string.
     */
    public static toUpperCase(value: string, combine?: boolean): StrBuilder | string {
        return new StrBuilder().setValue(value).toUpperCase(combine);
    }

    /**
     * Converts the given string to lowercase.
     *
     * @param {string} value - The string to lowercase.
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or lowercased string.
     */
    public static toLowerCase(value: string, combine?: boolean): StrBuilder | string {
        return new StrBuilder().setValue(value).toLowerCase(combine);
    }

    /**
     * Converts the given string to PascalCase.
     *
     * @param {string} value - The string to convert to PascalCase.
     * @param {boolean} combine - When true, returns the builder for chaining.
     * @returns {StrBuilder | string} The builder or PascalCased string.
     */
    public static toPascalCase(value: string, combine?: boolean): StrBuilder | string {
        return new StrBuilder().setValue(value).toPascalCase(combine);
    }

    /**
     * Converts the given string to snake_case.
     *
     * @param {string} value - The string to convert.
     * @param {string} delimiter - The separator between words (defaults to "_").
     * @returns {StrBuilder | string} The builder or snake_cased string.
     */
    public static toSnakeCase(value: string, delimiter: string = "_"): StrBuilder | string {
        return new StrBuilder().setValue(value).toSnakeCase(delimiter);
    }

    /**
     * Converts the given string to camelCase.
     *
     * @param {string} value - The string to convert.
     * @returns {StrBuilder | string} The builder or camelCased string.
     */
    public static toCamelCase(value: string): StrBuilder | string {
        return new StrBuilder().setValue(value).toCamelCase();
    }

    /**
     * Determines whether the string starts with any of the given needles.
     *
     * @param {string} value - The string to inspect.
     * @param {string | Array<string>} needles - A single prefix or a list of prefixes.
     * @returns {boolean} True when the string starts with at least one needle.
     */
    public static startsWith(value: string, needles: string | Array<string>): StrBuilder | boolean {
        return new StrBuilder().setValue(value).startsWith(needles);
    }

    /**
     * Determines whether the string ends with any of the given needles.
     *
     * @param {string} value - The string to inspect.
     * @param {string | Array<string>} needles - A single suffix or a list of suffixes.
     * @returns {boolean} True when the string ends with at least one needle.
     */
    public static endsWith(value: string, needles: string | Array<string>): StrBuilder | boolean {
        return new StrBuilder().setValue(value).endsWith(needles);
    }

    /**
     * Determines whether the string contains any of the given needles as a substring.
     *
     * @param {string} value - The string to inspect.
     * @param {string | Array<string>} needles - A single substring or a list of substrings.
     * @returns {boolean} True when the string contains at least one needle.
     */
    public static contains(value: string, needles: string | Array<string>): StrBuilder | boolean {
        return new StrBuilder().setValue(value).contains(needles);
    }
}
