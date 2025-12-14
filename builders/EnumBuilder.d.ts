export type EnumItem = {
    name: string;
    value: any;
};
export default class EnumBuilder {
    protected enums: any;
    constructor(enums: any);
    getKey(value: any): string | undefined;
    getValue(key: string): any;
    hasValue(value: any): boolean;
    hasKey(key: string): boolean;
    toArray(): Array<any>;
}
