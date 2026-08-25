/**
 * Checks if a value is considered empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is empty, otherwise false.
 */
export const isEmpty = (value: any): boolean => {
    if (value === undefined) return true;
    if (value === null) return true;
    if (typeof value === "boolean") return !value;
    if (typeof value === "number") return value === 0 || Number.isNaN(value);
    if (typeof value === "bigint") return value === 0n;
    if (typeof value === "string") return value.trim() === "";
    if (Array.isArray(value)) return value.length === 0;
    if (value instanceof Blob || value instanceof Map || value instanceof Set)
        return value.size === 0;
    if (Object.prototype.toString.call(value) === "[object Object]")
        return Object.keys(value).length === 0;

    return false;
};

/**
 * Checks if a value is not empty (inverse of isEmpty).
 *
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is not empty, otherwise false.
 */
export const isNotEmpty = (value: any): boolean => {
    return !isEmpty(value);
};

/**
 * Returns the value if it is not empty, otherwise returns the default value.
 *
 * @param {any} value - The value to evaluate.
 * @param {any} defaultValue - The fallback returned when the value is empty.
 * @returns {any} The original value, or the default.
 */
export const defineValue = (value: any, defaultValue: any = null): any => {
    if (isNotEmpty(value)) return value;

    return defaultValue;
};

/**
 * Prompts the user for a line of input on stdin.
 *
 * @param {string} question - The prompt displayed to the user.
 * @returns {Promise<string>} The trimmed answer typed by the user.
 */
export const ask = (question: string): Promise<string> => {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        return rl.question(question, (answer: string) => {
            rl.close();

            resolve(answer.trim());
        });
    });
};

/**
 * Checks whether a command is available on the system PATH.
 * Results are cached so the lookup is performed only once per command.
 *
 * @param {string} command - The command name to look up (e.g. "bun").
 * @returns {boolean} True when the command exists, otherwise false.
 */
const commandCache: Map<string, boolean> = new Map();

export const isCommandExists = (command: string): boolean => {
    if (commandCache.has(command)) return commandCache.get(command)!;

    const isWindows = process.platform === "win32";
    const checker = isWindows ? "where" : "which";
    const exists = Bun.spawnSync([checker, command]).exitCode === 0;

    commandCache.set(command, exists);

    return exists;
};

/**
 * Checks whether a Node module can be resolved.
 * Results are cached so the lookup is performed only once per module.
 *
 * @param {string} module - The module name or path to resolve.
 * @returns {boolean} True when the module resolves, otherwise false.
 */
export const isModuleExists = (module: string): boolean => {
    try {
        require.resolve(module);

        return true;
    } catch {
        return false;
    }
};
