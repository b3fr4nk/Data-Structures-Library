declare class LinkedListNode<T> {
    private value;
    next: LinkedListNode<T> | null;
    constructor(value: T);
    hasNext(): boolean;
    getValue(): T;
    setValue(value: T): void;
    getNext(): LinkedListNode<T> | null;
    setNext(next: LinkedListNode<T>): void;
    stringifyNode(): string;
}
export default LinkedListNode;
