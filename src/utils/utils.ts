import readline from "readline";

export const isEmpty = (value: any): boolean => {
    if (value === undefined) return true;
    if (value === null) return true;
    if (typeof value === "boolean") return !value;
    if (typeof value === "number") return value === 0 || Number.isNaN(value);
    if (typeof value === "bigint") return value === 0n;
    if (typeof value === "string") return Bun.stringWidth(value.trim()) === 0;
    if (Array.isArray(value)) return value.length === 0;
    if (value instanceof Blob || value instanceof Map || value instanceof Set) return value.size === 0;
    if (Object.prototype.toString.call(value) === "[object Object]") return Object.keys(value).length === 0;

    return false;
};

export const isNotEmpty = (value: any): boolean => {
    return !isEmpty(value);
};

export const defineValue = (value: any, defaultValue: any = null): any => {
    if (isNotEmpty(value)) return value;

    return defaultValue;
};

export const ask = (question: string): Promise<string> => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        return rl.question(question, (answer: string) => {
            rl.close();

            resolve(answer.trim());
        });
    });
};

export const isCommandExists = (command: string): boolean => {
    const isWindows = process.platform === "win32";
    const checker = isWindows ? "where" : "which";

    return Bun.spawnSync([checker, command]).exitCode === 0;
};

export const isModuleExists = (module: string): boolean => {
    try {
        require.resolve(module);

        return true;
    } catch (error: any) {
        return false;
    }
};