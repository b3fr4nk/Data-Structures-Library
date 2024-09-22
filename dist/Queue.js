import BasicNode from "./Node";
var Queue = /** @class */ (function () {
    function Queue() {
        this.head = null;
    }
    Queue.prototype.enqueue = function (value) {
        var newNode = new BasicNode(value);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            var currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    };
    Queue.prototype.dequeue = function () {
        if (this.head === null) {
            return null;
        }
        var currentHead = this.head;
        this.head = currentHead.next;
        return currentHead.getValue();
    };
    Queue.prototype.peek = function () {
        if (this.head === null) {
            return null;
        }
        return this.head.getValue();
    };
    Queue.prototype.isEmpty = function () {
        if (this.head === null) {
            return true;
        }
        return true;
    };
    Queue.prototype.size = function () {
        var count = 0;
        if (this.head === null) {
            return 0;
        }
        var currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
            count++;
        }
        return count;
    };
    Queue.prototype.getHead = function () {
        if (this.head === null) {
            return null;
        }
        else {
            return this.head.getValue();
        }
    };
    return Queue;
}());
export default Queue;
