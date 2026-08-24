import type {EnumItem} from "@/builders/EnumBuilder";
import EnumBuilder from "@/builders/EnumBuilder";

export type {EnumItem};

/**
 * Static facade over EnumBuilder for common enum introspection helpers.
 */
export default class Enum {
    /**
     * @param {any} enums - The enum object to introspect.
     * @returns {EnumBuilder} A builder wrapping the enum.
     */
    public static setEnums(enums: any): EnumBuilder {
        return new EnumBuilder(enums);
    }
}
