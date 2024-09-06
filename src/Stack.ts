import BasicNode from "./Node";

class Stack<T> {
  private head: BasicNode<T> | null;

  constructor() {
    this.head = null;
  }

  getHead(): T | null {
    if (this.head === null) {
        return null
    }
    return this.head.getValue()
  }

  append(value:T) {
    if (this.head === null) {
        this.head = new BasicNode(value)
    } else {
        let currentNode = this.head

        const newNode = new BasicNode(value)

        newNode.next = currentNode
        this.head = newNode
    }
  }
  
  pop():T {

    if (this.head === null) {
        throw new Error("Cannot pop an empty stack")
    }
    const poppedNode = this.head

    this.head = poppedNode.next

    return poppedNode.getValue()
  }

  find(value:T) {
    if (this.head === null) {
      return null;
    }

    let currentNode: BasicNode<T> = this.head;

    while (currentNode.getValue() !== value) {
      // check if this is the end of the linked list
      if (currentNode === null) {
        return null;
      }
      // continue searching
      currentNode = currentNode.next!;
    }

    return currentNode.getValue();
  }

  peek():T|null {
    if (this.head === null) {
        return null
    }

    return this.head.getValue()
  }
  
}

export default Stack