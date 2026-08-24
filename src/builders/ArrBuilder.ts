import ArrException from "@/exceptions/ArrException";

export default class ArrBuilder {
    protected values: Array<any>;

    public constructor() {
        this.values = [];
    }

    public setValues(values: Array<any>): ArrBuilder {
        if (!Array.isArray(values)) throw new ArrException("Invalid given array.");

        this.values = values;

        return this;
    }

    public only(keys: Array<string>): Array<any> {
        return this.values.filter((_, index: number) => keys.includes(String(index)));
    }

    public except(keys: Array<string>): Array<any> {
        return this.values.filter((_, index: number) => !keys.includes(String(index)));
    }

    public first(): any | undefined {
        return this.values.length ? this.values[0] : undefined;
    }

    public last(): any | undefined {
        return this.values.length ? this.values[this.values.length - 1] : undefined;
    }

    public pluck(key: string): Array<any> {
        return this.values.map((item: any) => (item ? item[key] : undefined));
    }
}
