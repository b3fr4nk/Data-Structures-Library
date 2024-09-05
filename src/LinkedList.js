import LinkedListNode from "./LinkedListNode.js";
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const newNode = new LinkedListNode(value);
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
    insert(value, position) {
        if (this.head === null) {
            return false;
        }
        let index = 0;
        let currentNode = this.head;
        const node = new LinkedListNode(value);
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
    }
    stringifyList() {
        if (this.head === null) {
            return "";
        }
        let listString = "";
        let currentNode = this.head;
        while (currentNode.next !== null) {
            listString += `${currentNode.stringifyNode()} > `;
            currentNode = currentNode.next;
        }
        listString += `${currentNode.stringifyNode()}`;
        console.log(listString);
        return listString;
    }
}
const nodeA = new LinkedListNode(1);
const linkedListA = new LinkedList();
linkedListA.append(nodeA);
const nodeB = new LinkedListNode(2);
linkedListA.insert(nodeB, 1);
console.log(linkedListA.stringifyList());
