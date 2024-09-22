var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value) {
        this.value = value;
        this.next = null;
    }
    LinkedListNode.prototype.hasNext = function () {
        if (this.next == null) {
            return false;
        }
        return true;
    };
    LinkedListNode.prototype.getValue = function () {
        return this.value;
    };
    LinkedListNode.prototype.setValue = function (value) {
        this.value = value;
    };
    LinkedListNode.prototype.getNext = function () {
        return this.next;
    };
    LinkedListNode.prototype.setNext = function (next) {
        this.next = next;
    };
    LinkedListNode.prototype.stringifyNode = function () {
        return "".concat(this.getValue());
    };
    return LinkedListNode;
}());
// Testing purposes
// const llNode = new LinkedListNode(10);
// console.log(llNode.stringifyNode())
export default LinkedListNode;
