import StrBuilder from "../builders/StrBuilder";
export default class Str {
    static toLowerCase(value, combine) {
        return new StrBuilder().setValue(value).toLowerCase(combine);
    }
    static toPascalCase(value, combine) {
        return new StrBuilder().setValue(value).toPascalCase(combine);
    }
    static toUpperCase(value, combine) {
        return new StrBuilder().setValue(value).toUpperCase(combine);
    }
    static random(size, combine) {
        return new StrBuilder().random(size, combine);
    }
    static ipToFileName(value, combine) {
        return new StrBuilder().setValue(value).ipToFileName(combine);
    }
}
