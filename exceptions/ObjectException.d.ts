export default class ObjectException extends Error {
    code: number;
    constructor(message?: string, code?: number);
}
