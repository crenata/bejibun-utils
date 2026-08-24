import ArrException from "../exceptions/ArrException";
/**
 * Fluent builder for common array transformations.
 *
 * Each method operates on the internal values array and returns the result
 * directly.
 */
export default class ArrBuilder {
    values;
    constructor() {
        this.values = [];
    }
    /**
     * Sets the working array of values.
     *
     * @param {Array<any>} values - The array to assign.
     * @returns {ArrBuilder} The current builder instance.
     * @throws {ArrException} When the given value is not an array.
     */
    setValues(values) {
        if (!Array.isArray(values))
            throw new ArrException("Invalid given array.");
        this.values = values;
        return this;
    }
    /**
     * Returns a new array containing only the elements at the given indices.
     *
     * @param {Array<string>} keys - The stringified indices to retain.
     * @returns {Array<any>} A filtered copy containing only the given indices.
     */
    only(keys) {
        return this.values.filter((_, index) => keys.includes(String(index)));
    }
    /**
     * Returns a new array with the elements at the given indices excluded.
     *
     * @param {Array<string>} keys - The stringified indices to remove.
     * @returns {Array<any>} A filtered copy excluding the given indices.
     */
    except(keys) {
        return this.values.filter((_, index) => !keys.includes(String(index)));
    }
    /**
     * Returns the first element of the array.
     *
     * @returns {any | undefined} The first element, or undefined when empty.
     */
    first() {
        return this.values.length ? this.values[0] : undefined;
    }
    /**
     * Returns the last element of the array.
     *
     * @returns {any | undefined} The last element, or undefined when empty.
     */
    last() {
        return this.values.length ? this.values[this.values.length - 1] : undefined;
    }
    /**
     * Extracts the value of a single property from each element of the array.
     *
     * @param {string} key - The property name to extract.
     * @returns {Array<any>} An array of the extracted values.
     */
    pluck(key) {
        return this.values.map((item) => (item ? item[key] : undefined));
    }
}
