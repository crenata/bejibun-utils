import ObjectBuilder from "../builders/ObjectBuilder";
export default class Object {
    static serialize(value) {
        return new ObjectBuilder().setValue(value).serialize();
    }
    static parseFormData(value) {
        return new ObjectBuilder().setValue(value).parseFormData();
    }
}
