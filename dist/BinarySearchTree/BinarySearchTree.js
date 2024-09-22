import BSTNode from "./BSTNode";
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(rootValue) {
        this.root = new BSTNode(rootValue);
    }
    BinarySearchTree.prototype.insert = function (value, current) {
        if (current === void 0) { current = this.root; }
        if (current === null) {
            return new BSTNode(value);
        }
        if (current.getValue() === value) {
            return current;
        }
        if (value < current.getValue()) {
            current.left = this.insert(value, current.left);
        }
        else if (value > current.getValue()) {
            current.right = this.insert(value, current.right);
        }
        return current;
    };
    BinarySearchTree.prototype.search = function (value, current) {
        if (current === void 0) { current = this.root; }
        // value found or does not exist
        if (current === null || current.getValue() === value) {
            return current;
        }
        // value is smaller than current
        if (value < current.getValue()) {
            return this.search(value, current.left);
        }
        // value is larger than current
        return this.search(value, current.right);
    };
    BinarySearchTree.prototype.delete = function (value, current) {
        if (current === void 0) { current = this.root; }
        // check to see if it exists
        if (current === null) {
            return current;
        }
        if (current.getValue() > value) {
            current.left = this.delete(value, current.left);
        }
        else if (current.getValue() < value) {
            current.right = this.delete(value, current.right);
        }
        else {
            // no left sub tree
            if (current.left === null) {
                return current.right;
            }
            // no right sub tree
            if (current.right === null) {
                return current.left;
            }
            // when both sub trees exist
            var successor = this.getSuccessor(current);
            current.setValue(successor.getValue());
            current.right = this.delete(value, current.right);
        }
        return current;
    };
    BinarySearchTree.prototype.getSuccessor = function (curr) {
        if (curr.right === null) {
            return curr;
        }
        curr = curr.right;
        while (curr !== null && curr.left != null) {
            curr = curr.left;
        }
        return curr;
    };
    return BinarySearchTree;
}());
export default BinarySearchTree;
