declare class Stack<T> {
    private head;
    constructor();
    getHead(): T | null;
    append(value: T): void;
    pop(): T;
    find(value: T): T | null;
    peek(): T | null;
}
export default Stack;
