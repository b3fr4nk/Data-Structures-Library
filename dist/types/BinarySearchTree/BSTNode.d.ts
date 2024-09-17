declare class BSTNode<T> {
    private value;
    left: BSTNode<T> | null;
    right: BSTNode<T> | null;
    constructor(value: T);
    getValue(): T;
    setValue(value: T): void;
}
export default BSTNode;
