class MaxHeap<T>{
  arr: T[]
  constructor() {
      this.arr = []
  }

  left(i:number):number {
    return 2*i + 1
  }

  right(i:number):number {
    return 2*i +2
  }

  parent(i:number):number {
    let p = Math.floor((i - 1) / 2);
    return p
  }

  getMax():T {
    return this.arr[0]
  }

  insert(value:T) {

    this.arr.push(value)

    let i:number = this.arr.length - 1
    while (i > 0 && this.arr[this.parent(i)] < this.arr[i]) {
      const p:number = this.parent(i);
      [this.arr[i], this.arr[p]] = [this.arr[p], this.arr[i]];
      i = p
    }
  }

  extractMax(i:number):T|undefined {
    if (this.arr.length === 0) {
      return undefined;
    }
    if (this.arr.length === 1) {
      return this.arr.pop(); // Handle single element heap
    }

    const res = this.arr[0]
    this.arr[0] = this.arr[this.arr.length - 1]
    this.arr.pop();
    this.maxHeapify(0)
    return res
  }

  // method assumes all subtrees are already heapified
  maxHeapify(i:number) {
    let arr = this.arr
    let n = arr.length

    if (n === 1) {
      return
    }

    let left = this.left(i)
    let right = this.right(i)
    let largest = i

    if (left < n && arr[left] > arr[largest]) {
      largest = left
    }
    if (right < n && arr[right] > arr[largest]) {
      largest = right
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]
      this.maxHeapify(largest)
    }
    this.arr = arr
  }
}



export default MaxHeap