import AVLNode from "./AVLNode";
declare class AVLTree<T> {
    private root;
    constructor(rootValue: T);
    height(node: AVLNode<T> | null): number;
    getBalance(node: AVLNode<T> | null): number;
    rightRotate(y: AVLNode<T>): AVLNode<T>;
    leftRotate(x: AVLNode<T>): AVLNode<T>;
    insert(value: T): void;
    doInsert(value: T, current?: AVLNode<T> | null): AVLNode<T>;
    insertRoot(value: T): void;
    getMinValueNode(node: AVLNode<T>): AVLNode<T>;
    delete(value: T, current?: AVLNode<T> | null): AVLNode<T> | null;
    private getSuccessor;
}
export default AVLTree;
