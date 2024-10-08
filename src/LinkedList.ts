import LinkedListNode from "./LinkedListNode.js"

class LinkedList<T> {
    private head: LinkedListNode<T> | null
    constructor() {
        this.head = null
    }

    getHead():LinkedListNode<T>|null {
        return this.head
    }

    append(value:T) {
        const newNode: LinkedListNode<T> = new LinkedListNode(value)

        if (this.head === null) {
            this.head = newNode
        } else {
            let currentNode = this.head

            while (currentNode.next !== null) {
                currentNode = currentNode.next
            }

            currentNode.setNext(newNode)
        }

    }

    insert(value:T, position:number): boolean {

        if (this.head === null) {
            return false
        }

        let index = 0
        let currentNode = this.head
        const node = new LinkedListNode(value)

        if (position === 0) {
            node.next = this.head
            this.head = node
            return true
        }

        if (currentNode === null) {
            return false
        }

        while(currentNode.next !== null) {
            index++
            if (index === position) {
                node.next = currentNode.next
                currentNode.next = node
            }
            currentNode = currentNode.next
        }

        return false
    }

    find(value:T):LinkedListNode<T>|null {
        if (this.head === null) {
            return null
        }

        let currentNode:LinkedListNode<T> = this.head

        while(currentNode.getValue() !== value ) {
            // check if this is the end of the linked list
            if (currentNode === null) {
              return null;
            }
            // continue searching
            currentNode = currentNode.next!
        }

        return currentNode

    }

    stringifyList():string {
        if (this.head === null) {
            return ""
        }
        let listString = ""
        let currentNode = this.head
        while (currentNode.next !== null) {
            listString += `${currentNode.stringifyNode()} > `
            currentNode = currentNode.next
        }
        listString += `${currentNode.stringifyNode()}`
        return listString
    }

}

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

export default LinkedList