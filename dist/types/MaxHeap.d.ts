declare class MaxHeap<T> {
    arr: T[];
    constructor();
    left(i: number): number;
    right(i: number): number;
    parent(i: number): number;
    getMax(): T;
    insert(value: T): void;
    extractMax(i: number): T | undefined;
    maxHeapify(i: number): void;
}
export default MaxHeap;
