export type EnumItem = {
    name: string;
    value: any;
};
export default class EnumBuilder {
    protected enums: any;
    constructor(enums: any);
    getName(value: number): string | undefined;
    getValue(key: string): number;
    toArray(): Array<any>;
}
