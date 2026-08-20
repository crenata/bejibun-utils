import EnumException from "@/exceptions/EnumException";
import {isEmpty, isNotEmpty} from "@/utils/utils";

export type EnumItem = {
    name: string;
    value: any;
};

export default class EnumBuilder {
    protected enums: any;

    public constructor(enums: any) {
        if (isEmpty(enums)) throw new EnumException("The enum parameter is required.");
        this.enums = enums;
    }

    public getKey(value: any): string | undefined {
        return Object.keys(this.enums).find((item) => this.enums[item] === value);
    }

    public getValue(key: string): any {
        return this.enums[key];
    }

    public hasValue(value: any): boolean {
        return isNotEmpty(this.getKey(value));
    }

    public hasKey(key: string): boolean {
        return isNotEmpty(this.getValue(key));
    }

    public toArray(): Array<EnumItem> {
        return Object.keys(this.enums).map((key) => ({
            name: key,
            value: this.getValue(key)
        }));
    }
}
