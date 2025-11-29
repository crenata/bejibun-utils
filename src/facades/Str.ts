import StrBuilder from "@/builders/StrBuilder";

export default class Str {
    public static toLowerCase(value: string, combine?: boolean): StrBuilder | string {
        return new StrBuilder().setValue(value).toLowerCase(combine);
    }

    public static toPascalCase(value: string, combine?: boolean): StrBuilder | string {
        return new StrBuilder().setValue(value).toPascalCase(combine);
    }

    public static toUpperCase(value: string, combine?: boolean): StrBuilder | string {
        return new StrBuilder().setValue(value).toUpperCase(combine);
    }

    public static random(size?: number): string {
        return new StrBuilder().random(size);
    }
}