class LinkedListNode<T> {
    value: T
    next: LinkedListNode<T>|null
    constructor(value:T) {
        this.value = value
        this.next = null
    }

    hasNext() {
        if(this.next == null) {
            return false
        }
        return true
    }

    stringifyNode():string {
        return `${this.value}`
    }
}
// Testing purposes
// const llNode = new LinkedListNode(10);
// console.log(llNode.stringifyNode())

export default LinkedListNode