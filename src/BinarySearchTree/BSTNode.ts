class BSTNode<T> {
  private value: T;
  left: BSTNode<T> | null;
  right: BSTNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null
  }

  getValue(): T {
    return this.value;
  }

  setValue(value:T) {
    this.value = value
  }
}

export default BSTNode;
