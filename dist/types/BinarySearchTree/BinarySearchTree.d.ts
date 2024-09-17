import BSTNode from "./BSTNode";
declare class BinarySearchTree<T> {
    private root;
    constructor(rootValue: T);
    insert(value: T, current?: BSTNode<T> | null): BSTNode<T>;
    search(value: T, current?: BSTNode<T> | null): BSTNode<T> | null;
    delete(value: T, current?: BSTNode<T> | null): BSTNode<T> | null;
    private getSuccessor;
}
export default BinarySearchTree;
