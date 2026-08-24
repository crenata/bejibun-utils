import Logger from "@bejibun/logger";
import { defineValue } from "../utils/utils";
export default class ObjectException extends Error {
    /** Numeric HTTP-style error code attached to the exception. */
    code;
    /**
     * @param {string} message - Human-readable error message.
     * @param {number} code - Numeric error code; defaults to 500 when omitted.
     */
    constructor(message, code) {
        super(message);
        this.name = "ObjectException";
        this.code = defineValue(code, 500);
        Logger.setContext(this.name).error(this.message).trace(this.stack);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ObjectException);
        }
    }
}
