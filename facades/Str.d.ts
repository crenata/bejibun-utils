import StrBuilder from "../builders/StrBuilder";
export default class Str {
    static toLowerCase(value: string, combine?: boolean): StrBuilder | string;
    static toPascalCase(value: string, combine?: boolean): StrBuilder | string;
    static toUpperCase(value: string, combine?: boolean): StrBuilder | string;
}
