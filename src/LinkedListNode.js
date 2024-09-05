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
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
    getNext() {
        return this.next;
    }
    setNext(next) {
        this.next = next;
    }
    stringifyNode() {
        return `${this.getValue()}`;
    }
}
// Testing purposes
// const llNode = new LinkedListNode(10);
// console.log(llNode.stringifyNode())
export default LinkedListNode;
