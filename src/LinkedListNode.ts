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

    getValue():T {
        return this.value
    }

    setValue(value:T){
        this.value = value
    }

    setNext(next:LinkedListNode<T>) {
        this.next = next
    }

    stringifyNode():string {
        return `${this.getValue()}`
    }
}
// Testing purposes
// const llNode = new LinkedListNode(10);
// console.log(llNode.stringifyNode())

export default LinkedListNode