export default class StrBuilder {
    protected value: string;
    constructor();
    setValue(value: string): StrBuilder;
    toLowerCase(combine?: boolean): StrBuilder | string;
    toPascalCase(combine?: boolean): StrBuilder | string;
    toUpperCase(combine?: boolean): StrBuilder | string;
    random(size?: number): string;
}
