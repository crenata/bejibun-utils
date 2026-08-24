import ObjectBuilder from "@/builders/ObjectBuilder";

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
    public static serialize(value: Record<string, any>): any {
        return new ObjectBuilder().setValue(value).serialize();
    }

    public static only(value: Record<string, any>, keys: Array<string>): Record<string, any> {
        return new ObjectBuilder().setValue(value).only(keys);
    }

    public static except(value: Record<string, any>, keys: Array<string>): Record<string, any> {
        return new ObjectBuilder().setValue(value).except(keys);
    }

    public static first(value: Record<string, any>): any | undefined {
        return new ObjectBuilder().setValue(value).first();
    }

    public static last(value: Record<string, any>): any | undefined {
        return new ObjectBuilder().setValue(value).last();
    }

    /**
     * Parses a FormData instance into a nested object.
     *
     * @param {FormData} value - The form data to parse.
     * @param {boolean} raw - When true, skips normalization of the result.
     * @returns {any} The parsed form payload.
     */
    public static parseFormData(value: FormData, raw: boolean = false): any {
        return new ObjectBuilder().setValue(value).parseFormData(raw);
    }
}
