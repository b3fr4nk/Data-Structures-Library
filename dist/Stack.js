import BasicNode from "./Node";
var Stack = /** @class */ (function () {
    function Stack() {
        this.head = null;
    }
    Stack.prototype.getHead = function () {
        if (this.head === null) {
            return null;
        }
        return this.head.getValue();
    };
    Stack.prototype.append = function (value) {
        if (this.head === null) {
            this.head = new BasicNode(value);
        }
        else {
            var currentNode = this.head;
            var newNode = new BasicNode(value);
            newNode.next = currentNode;
            this.head = newNode;
        }
    };
    Stack.prototype.pop = function () {
        if (this.head === null) {
            throw new Error("Cannot pop an empty stack");
        }
        var poppedNode = this.head;
        this.head = poppedNode.next;
        return poppedNode.getValue();
    };
    Stack.prototype.find = function (value) {
        if (this.head === null) {
            return null;
        }
        var currentNode = this.head;
        while (currentNode.getValue() !== value) {
            // check if this is the end of the linked list
            if (currentNode === null) {
                return null;
            }
            // continue searching
            currentNode = currentNode.next;
        }
        return currentNode.getValue();
    };
    Stack.prototype.peek = function () {
        if (this.head === null) {
            return null;
        }
        return this.head.getValue();
    };
    return Stack;
}());
export default Stack;
