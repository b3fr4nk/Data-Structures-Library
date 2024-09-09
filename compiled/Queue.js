import BasicNode from "./Node";
class Queue {
    constructor() {
        this.head = null;
    }
    enqueue(value) {
        const newNode = new BasicNode(value);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }
    dequeue() {
        if (this.head === null) {
            return null;
        }
        const currentHead = this.head;
        this.head = currentHead.next;
        return currentHead.getValue();
    }
    peek() {
        if (this.head === null) {
            return null;
        }
        return this.head.getValue();
    }
    isEmpty() {
        if (this.head === null) {
            return true;
        }
        return true;
    }
    size() {
        let count = 0;
        if (this.head === null) {
            return 0;
        }
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
            count++;
        }
        return count;
    }
    getHead() {
        if (this.head === null) {
            return null;
        }
        else {
            return this.head.getValue();
        }
    }
}
export default Queue;
