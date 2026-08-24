import Logger from "@bejibun/logger";
import {defineValue} from "@/utils/utils";

export default class EnumException extends Error {
    /** Numeric HTTP-style error code attached to the exception. */
    public code: number;

    /**
     * @param {string} message - Human-readable error message.
     * @param {number} code - Numeric error code; defaults to 500 when omitted.
     */
    public constructor(message?: string, code?: number) {
        super(message);
        this.name = "EnumException";
        this.code = defineValue(code, 500);

        Logger.setContext(this.name).error(this.message).trace(this.stack);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, EnumException);
        }
    }
}
