import BasicNode from "./Node";
declare class Queue<T> {
    head: BasicNode<T> | null;
    constructor();
    enqueue(value: T): void;
    dequeue(): T | null;
    peek(): T | null;
    isEmpty(): boolean;
    size(): number;
    getHead(): T | null;
}
export default Queue;
