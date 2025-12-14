import EnumException from "../exceptions/EnumException";
import { isEmpty, isNotEmpty } from "../utils/utils";
export default class EnumBuilder {
    enums;
    constructor(enums) {
        if (isEmpty(enums))
            throw new EnumException("The enum parameter is required.");
        this.enums = enums;
    }
    getKey(value) {
        return Object.keys(this.enums).find(item => this.enums[item] === value);
    }
    getValue(key) {
        return this.enums[key];
    }
    hasValue(value) {
        return isNotEmpty(this.getKey(value));
    }
    hasKey(key) {
        return isNotEmpty(this.getValue(key));
    }
    toArray() {
        return Object.keys(this.enums)
            .map(key => ({
            name: key,
            value: this.getValue(key)
        }));
    }
}
