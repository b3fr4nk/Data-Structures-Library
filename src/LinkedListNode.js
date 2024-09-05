class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    hasNext() {
        if (this.next == null) {
            return false;
        }
        return true;
    }
    stringifyNode() {
        return `${this.value}`;
    }
}
// Testing purposes
// const llNode = new LinkedListNode(10);
// console.log(llNode.stringifyNode())
export default LinkedListNode;
