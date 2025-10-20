import Logger from "@bejibun/logger";
import { defineValue } from "../utils/utils";
export default class EnumException extends Error {
    code;
    constructor(message, code) {
        super(message);
        this.name = "EnumException";
        this.code = defineValue(code, 500);
        Logger.setContext(this.name).error(this.message).trace(this.stack);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, EnumException);
        }
    }
}
