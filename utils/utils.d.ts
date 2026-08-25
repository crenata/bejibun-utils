/**
 * Checks if a value is considered empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is empty, otherwise false.
 */
export declare const isEmpty: (value: any) => boolean;
/**
 * Checks if a value is not empty (inverse of isEmpty).
 *
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is not empty, otherwise false.
 */
export declare const isNotEmpty: (value: any) => boolean;
/**
 * Returns the value if it is not empty, otherwise returns the default value.
 *
 * @param {any} value - The value to evaluate.
 * @param {any} defaultValue - The fallback returned when the value is empty.
 * @returns {any} The original value, or the default.
 */
export declare const defineValue: (value: any, defaultValue?: any) => any;
/**
 * Prompts the user for a line of input on stdin.
 *
 * @param {string} question - The prompt displayed to the user.
 * @returns {Promise<string>} The trimmed answer typed by the user.
 */
export declare const ask: (question: string) => Promise<string>;
export declare const isCommandExists: (command: string) => boolean;
/**
 * Checks whether a Node module can be resolved.
 * Results are cached so the lookup is performed only once per module.
 *
 * @param {string} module - The module name or path to resolve.
 * @returns {boolean} True when the module resolves, otherwise false.
 */
export declare const isModuleExists: (module: string) => boolean;
