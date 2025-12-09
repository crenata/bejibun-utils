import ObjectBuilder from "@/builders/ObjectBuilder";

export default class Object {
    public static serialize(value: any): any {
        return new ObjectBuilder().setValue(value).serialize();
    }

    public static parseFormData(value: FormData): any {
        return new ObjectBuilder().setValue(value).parseFormData();
    }
}