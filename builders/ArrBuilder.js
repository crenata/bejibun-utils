import ArrException from "../exceptions/ArrException";
export default class ArrBuilder {
    values;
    constructor() {
        this.values = [];
    }
    setValues(values) {
        if (!Array.isArray(values))
            throw new ArrException("Invalid given array.");
        this.values = values;
        return this;
    }
    only(keys) {
        return this.values.filter((_, index) => keys.includes(String(index)));
    }
    except(keys) {
        return this.values.filter((_, index) => !keys.includes(String(index)));
    }
    first() {
        return this.values.length ? this.values[0] : undefined;
    }
    last() {
        return this.values.length ? this.values[this.values.length - 1] : undefined;
    }
    pluck(key) {
        return this.values.map((item) => (item ? item[key] : undefined));
    }
}
