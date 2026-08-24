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
    static only(values: Array<any>, keys: Array<string>): Array<any>;
    /**
     * Returns a new array with the elements at the given indices excluded.
     *
     * @param {Array<any>} values - The source array.
     * @param {Array<string>} keys - The stringified indices to remove.
     * @returns {Array<any>} A filtered copy excluding the given indices.
     */
    static except(values: Array<any>, keys: Array<string>): Array<any>;
    /**
     * Returns the first element of the array.
     *
     * @param {Array<any>} values - The source array.
     * @returns {any | undefined} The first element, or undefined when empty.
     */
    static first(values: Array<any>): any | undefined;
    /**
     * Returns the last element of the array.
     *
     * @param {Array<any>} values - The source array.
     * @returns {any | undefined} The last element, or undefined when empty.
     */
    static last(values: Array<any>): any | undefined;
    /**
     * Extracts the value of a single property from each element of the array.
     *
     * @param {Array<Record<string, any>>} values - The list of objects to extract from.
     * @param {string} key - The property name to extract.
     * @returns {Array<any>} An array of the extracted values.
     */
    static pluck(values: Array<Record<string, any>>, key: string): Array<any>;
}
