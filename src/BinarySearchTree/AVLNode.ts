class AVLNode<T> {
    key: T
    left: AVLNode<T>|null
    right: AVLNode<T>|null
    height:number

  constructor(key:T) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.height = 1;
  }

  getValue():T {
    return this.key
  }

  setValue(value:T) {
    this.key = value
  }
}

export default AVLNode
