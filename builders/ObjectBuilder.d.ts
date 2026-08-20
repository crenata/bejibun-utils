export default class ObjectBuilder {
    protected value: any;
    constructor();
    setValue(value: any): ObjectBuilder;
    serialize(): any;
    parseFormData(raw?: boolean): Record<string, any>;
    private normalize;
}
