import LinkedListNode from "./LinkedListNode.js"

class LinkedList<T> {
    private head: LinkedListNode<T> | null
    constructor() {
        this.head = null
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
const linkedListA = new LinkedList()
linkedListA.append(10)

linkedListA.append(15)

linkedListA.insert(12, 1)

console.log(linkedListA.stringifyList())