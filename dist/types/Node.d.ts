declare class BasicNode<T> {
    private value;
    next: BasicNode<T> | null;
    constructor(value: T);
    getValue(): T;
    stringifyNode(): string;
}
export default BasicNode;
