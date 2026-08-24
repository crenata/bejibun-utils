import ArrBuilder from "@/builders/ArrBuilder";

/**
 * Static facade over ArrBuilder for common array transformations.
 */
export default class Arr {
    /**
     * Returns a new array containing only the elements at the given indices.
     *
     * @param {Array<any>} values - The source array.
     * @param {Array<string>} keys - The stringified indices to retain.
     * @returns {Array<any>} A filtered copy containing only the given indices.
     */
    public static only(values: Array<any>, keys: Array<string>): Array<any> {
        return new ArrBuilder().setValues(values).only(keys);
    }

    /**
     * Returns a new array with the elements at the given indices excluded.
     *
     * @param {Array<any>} values - The source array.
     * @param {Array<string>} keys - The stringified indices to remove.
     * @returns {Array<any>} A filtered copy excluding the given indices.
     */
    public static except(values: Array<any>, keys: Array<string>): Array<any> {
        return new ArrBuilder().setValues(values).except(keys);
    }

    /**
     * Returns the first element of the array.
     *
     * @param {Array<any>} values - The source array.
     * @returns {any | undefined} The first element, or undefined when empty.
     */
    public static first(values: Array<any>): any | undefined {
        return new ArrBuilder().setValues(values).first();
    }

    /**
     * Returns the last element of the array.
     *
     * @param {Array<any>} values - The source array.
     * @returns {any | undefined} The last element, or undefined when empty.
     */
    public static last(values: Array<any>): any | undefined {
        return new ArrBuilder().setValues(values).last();
    }

    /**
     * Extracts the value of a single property from each element of the array.
     *
     * @param {Array<Record<string, any>>} values - The list of objects to extract from.
     * @param {string} key - The property name to extract.
     * @returns {Array<any>} An array of the extracted values.
     */
    public static pluck(values: Array<Record<string, any>>, key: string): Array<any> {
        return new ArrBuilder().setValues(values).pluck(key);
    }
}
