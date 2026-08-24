import ArrBuilder from "@/builders/ArrBuilder";

/**
 * Static facade over ArrBuilder for payload normalization and parsing.
 */
export default class Arr {
    public static only(values: Array<any>, keys: Array<string>): Array<any> {
        return new ArrBuilder().setValues(values).only(keys);
    }

    public static except(values: Array<any>, keys: Array<string>): Array<any> {
        return new ArrBuilder().setValues(values).except(keys);
    }

    public static first(values: Array<any>): any | undefined {
        return new ArrBuilder().setValues(values).first();
    }

    public static last(values: Array<any>): any | undefined {
        return new ArrBuilder().setValues(values).last();
    }

    public static pluck(values: Array<Record<string, any>>, key: string): Array<any> {
        return new ArrBuilder().setValues(values).pluck(key);
    }
}
