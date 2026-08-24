export default class ArrBuilder {
    protected values: Array<any>;
    constructor();
    setValues(values: Array<any>): ArrBuilder;
    only(keys: Array<string>): Array<any>;
    except(keys: Array<string>): Array<any>;
    first(): any | undefined;
    last(): any | undefined;
    pluck(key: string): Array<any>;
}
