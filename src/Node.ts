class BasicNode<T> {
  private value: T;
  next: BasicNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }

  getValue(): T {
    return this.value;
  }

  stringifyNode(): string {
    return `${this.value}`;
  }
}

export default BasicNode;
