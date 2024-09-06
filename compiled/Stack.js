import StackNode from "./StackNode";
class Stack {
    constructor() {
        this.head = null;
    }
    getHead() {
        if (this.head === null) {
            return null;
        }
        return this.head.getValue();
    }
    append(value) {
        if (this.head === null) {
            this.head = new StackNode(value);
        }
        else {
            let currentNode = this.head;
            const newNode = new StackNode(value);
            newNode.next = currentNode;
            this.head = newNode;
        }
    }
    pop() {
        if (this.head === null) {
            throw new Error("Cannot pop an empty stack");
        }
        const poppedNode = this.head;
        this.head = poppedNode.next;
        return poppedNode.getValue();
    }
    find(value) {
        if (this.head === null) {
            return null;
        }
        let currentNode = this.head;
        while (currentNode.getValue() !== value) {
            // check if this is the end of the linked list
            if (currentNode === null) {
                return null;
            }
            // continue searching
            currentNode = currentNode.next;
        }
        return currentNode.getValue();
    }
}
export default Stack;
