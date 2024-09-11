import LinkedListNode from "./LinkedListNode.js";
declare class LinkedList<T> {
    private head;
    constructor();
    getHead(): LinkedListNode<T> | null;
    append(value: T): void;
    insert(value: T, position: number): boolean;
    find(value: T): LinkedListNode<T> | null;
    stringifyList(): string;
}
export default LinkedList;
