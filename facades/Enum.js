import EnumBuilder from "../builders/EnumBuilder";
/**
 * Static facade over EnumBuilder for common enum introspection helpers.
 */
export default class Enum {
    /**
     * Creates a builder for the given enum.
     *
     * @param {any} enums - The enum object to introspect.
     * @returns {EnumBuilder} A builder wrapping the enum.
     */
    static setEnums(enums) {
        return new EnumBuilder(enums);
    }
}
