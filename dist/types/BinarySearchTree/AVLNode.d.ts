declare class AVLNode<T> {
    key: T;
    left: AVLNode<T> | null;
    right: AVLNode<T> | null;
    height: number;
    constructor(key: T);
    getValue(): T;
    setValue(value: T): void;
}
export default AVLNode;
