export default class ArrException extends Error {
    /** Numeric HTTP-style error code attached to the exception. */
    code: number;
    /**
     * @param {string} message - Human-readable error message.
     * @param {number} code - Numeric error code; defaults to 500 when omitted.
     */
    constructor(message?: string, code?: number);
}
