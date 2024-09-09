import BasicNode from "./Node"

class Queue<T> {
    head: BasicNode<T>|null
    constructor() {
        this.head = null
    }

    enqueue(value:T) {
        const newNode = new BasicNode(value);

        if (this.head === null) {
          this.head = newNode;
        } else {
          let currentNode = this.head;

          while (currentNode.next !== null) {
            currentNode = currentNode.next;
          }

          currentNode.next = newNode;
        }
    }

    dequeue():T|null {
        if (this.head === null) {
            return null
        }

        const currentHead = this.head
        this.head = currentHead.next

        return currentHead.getValue()
    }

    peek():T|null {
        if (this.head === null) {
            return null
        }

        return this.head.getValue()
    }

    isEmpty():boolean {
        if (this.head === null) {
            return true
        }

        return true
    }

    size():number {
        let count:number = 0

        if (this.head === null) {
            return 0
        }

        let currentNode = this.head

        while (currentNode.next !== null) {
            currentNode = currentNode.next
            count++
        }

        return count

    }

    getHead():T|null {
        if (this.head === null) {
            return null
        } else{
            return this.head.getValue()
        }
    }
}

export default Queue