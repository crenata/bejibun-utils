/**
 * Static facade over ArrBuilder for payload normalization and parsing.
 */
export default class Arr {
    static only(values: Array<any>, keys: Array<string>): Array<any>;
    static except(values: Array<any>, keys: Array<string>): Array<any>;
    static first(values: Array<any>): any | undefined;
    static last(values: Array<any>): any | undefined;
    static pluck(values: Array<Record<string, any>>, key: string): Array<any>;
}
