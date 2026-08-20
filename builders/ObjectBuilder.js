import ObjectException from "../exceptions/ObjectException";
import Luxon from "../facades/Luxon";
import { isEmpty, isNotEmpty } from "../utils/utils";
export default class ObjectBuilder {
    value;
    constructor() {
        this.value = null;
        this.normalize = this.normalize.bind(this);
    }
    setValue(value) {
        this.value = value;
        return this;
    }
    serialize() {
        return this.normalize(this.value);
    }
    parseFormData(raw = false) {
        if (!(this.value instanceof FormData))
            throw new ObjectException("Invalid form data.");
        const result = {};
        for (const [key, value] of this.value.entries()) {
            const keys = key.replace(/]/g, "").split("[");
            let current = result;
            for (let i = 0; i < keys.length; i++) {
                const part = keys[i];
                const nextPart = keys[i + 1];
                if (i === keys.length - 1) {
                    if (current[part] === undefined)
                        current[part] = value;
                    else if (Array.isArray(current[part]))
                        current[part].push(value);
                }
                else {
                    const isArrayIndex = /^\d+$/.test(nextPart);
                    if (isEmpty(current[part]))
                        current[part] = isArrayIndex ? [] : {};
                    current = current[part];
                }
            }
        }
        return raw ? result : this.normalize(result);
    }
    normalize(obj) {
        if (Array.isArray(obj))
            return obj.map(this.normalize);
        if (obj === null || obj === undefined)
            return null;
        if (obj instanceof Luxon.DateTime)
            return obj.isValid ? obj.toISO() : null;
        if (obj instanceof Date)
            return Number.isNaN(obj.getTime()) ? null : obj.toISOString();
        if (isNotEmpty(obj) &&
            typeof obj === "object" &&
            !(obj instanceof File) &&
            Object.keys(obj).length === 0)
            return null;
        if (isNotEmpty(obj) && typeof obj === "object" && !(obj instanceof File)) {
            const normalized = {};
            Object.keys(obj).forEach((key) => {
                normalized[key] = this.normalize(obj[key]);
            });
            return normalized;
        }
        if (typeof obj === "string") {
            const trimmed = obj.trim();
            if (trimmed === "")
                return null;
            if (trimmed === "true")
                return true;
            if (trimmed === "false")
                return false;
            const num = Number(trimmed);
            if (!Number.isNaN(num) && trimmed === num.toString())
                return num;
            return trimmed;
        }
        return obj;
    }
}
