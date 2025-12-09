export default class ObjectBuilder {
    protected value: any;
    constructor();
    setValue(value: any): ObjectBuilder;
    serialize(): any;
    parseFormData(): Record<string, any>;
    private normalize;
}
