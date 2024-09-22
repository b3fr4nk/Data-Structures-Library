import LinkedListNode from "./LinkedListNode.js";
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    LinkedList.prototype.append = function (value) {
        var newNode = new LinkedListNode(value);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            var currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.setNext(newNode);
        }
    };
    LinkedList.prototype.insert = function (value, position) {
        if (this.head === null) {
            return false;
        }
        var index = 0;
        var currentNode = this.head;
        var node = new LinkedListNode(value);
        if (position === 0) {
            node.next = this.head;
            this.head = node;
            return true;
        }
        if (currentNode === null) {
            return false;
        }
        while (currentNode.next !== null) {
            index++;
            if (index === position) {
                node.next = currentNode.next;
                currentNode.next = node;
            }
            currentNode = currentNode.next;
        }
        return false;
    };
    LinkedList.prototype.find = function (value) {
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
        return currentNode;
    };
    LinkedList.prototype.stringifyList = function () {
        if (this.head === null) {
            return "";
        }
        var listString = "";
        var currentNode = this.head;
        while (currentNode.next !== null) {
            listString += "".concat(currentNode.stringifyNode(), " > ");
            currentNode = currentNode.next;
        }
        listString += "".concat(currentNode.stringifyNode());
        return listString;
    };
    return LinkedList;
}());
// testing remove before production
// const linkedListA = new LinkedList()
// linkedListA.append(10)
// linkedListA.append(15)
// linkedListA.insert(12, 1)
// console.log(linkedListA.stringifyList())
// const list = new LinkedList();
// list.append(10);
// list.append(15);
// list.append(35);
// console.log(list.find(10))
export default LinkedList;
