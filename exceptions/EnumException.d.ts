export default class EnumException extends Error {
    code: number;
    constructor(message?: string, code?: number);
}
