import ArrBuilder from "../builders/ArrBuilder";
/**
 * Static facade over ArrBuilder for payload normalization and parsing.
 */
export default class Arr {
    static only(values, keys) {
        return new ArrBuilder().setValues(values).only(keys);
    }
    static except(values, keys) {
        return new ArrBuilder().setValues(values).except(keys);
    }
    static first(values) {
        return new ArrBuilder().setValues(values).first();
    }
    static last(values) {
        return new ArrBuilder().setValues(values).last();
    }
    static pluck(values, key) {
        return new ArrBuilder().setValues(values).pluck(key);
    }
}
