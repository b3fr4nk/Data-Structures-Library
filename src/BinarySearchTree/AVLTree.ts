import AVLNode from "./AVLNode";

class AVLTree<T> {
  private root: AVLNode<T> | null;
  constructor(rootValue: T) {
    this.root = new AVLNode(rootValue);
  }

  height(node: AVLNode<T> | null): number {
    return node?.height ?? 0;
  }

  getBalance(node: AVLNode<T> | null): number {
    return node ? this.height(node.left) - this.height(node.right) : 0;
  }

  rightRotate(y: AVLNode<T>): AVLNode<T> {
    const x = y.left!;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

    // Return new root
    return x;
  }

  leftRotate(x: AVLNode<T>): AVLNode<T> {
    const y = x.right!;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

    // Return new root
    return y;
  }

  insert(value:T) {
    const newVal = this.doInsert(value)
    if (newVal === null) {
        return
    }
    this.insertRoot(newVal.key)
  }

  doInsert(value: T, current: AVLNode<T> | null = this.root): AVLNode<T> {
    if (current === null) {
      return new AVLNode(value);
    }

    if (value < current.getValue()) {
      current.left = this.doInsert(value, current.left);
    } else if (value > current.getValue()) {
      current.right = this.doInsert(value, current.right);
    } else {
      return current; // duplicate keys are not allowed
    }

    // Update the height of the current node
    current.height =
      1 + Math.max(this.height(current.left), this.height(current.right));

    // Get the balance factor
    const balance = this.getBalance(current);

    // Balance the tree if needed
    // Left-Left case
    if (balance > 1 && this.getBalance(current.left!) >= 0) {
      return this.rightRotate(current);
    }

    // Right-Right case
    if (balance < -1 && this.getBalance(current.right!) <= 0) {
      return this.leftRotate(current);
    }

    // Left-Right case
    if (balance > 1 && this.getBalance(current.left!) < 0) {
      current.left = this.leftRotate(current.left!);
      return this.rightRotate(current);
    }

    // Right-Left case
    if (balance < -1 && this.getBalance(current.right!) > 0) {
      current.right = this.rightRotate(current.right!);
      return this.leftRotate(current);
    }

    return current;
  }

  insertRoot(value: T): void {
    this.root = this.doInsert(value, this.root);
  }

  getMinValueNode(node: AVLNode<T>): AVLNode<T> {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  delete(value: T, current: AVLNode<T> | null = this.root): AVLNode<T> | null {
    // Step 1: Perform standard BST deletion
    if (current === null) {
      return current; // Base case: the node is not found
    }

    if (value < current.getValue()) {
      // If the value to be deleted is smaller than the root's value, then it lies in the left subtree
      current.left = this.delete(value, current.left);
    } else if (value > current.getValue()) {
      // If the value to be deleted is larger than the root's value, then it lies in the right subtree
      current.right = this.delete(value, current.right);
    } else {
      // Node with only one child or no child
      if (current.left === null) {
        return current.right; // If no left child, replace node with right child
      } else if (current.right === null) {
        return current.left; // If no right child, replace node with left child
      }

      // Node with two children: Get the in-order successor (smallest in the right subtree)
      let successor = this.getMinValueNode(current.right);

      // Copy the successor's value to this node
      current.setValue(successor.getValue());

      // Delete the in-order successor
      current.right = this.delete(successor.getValue(), current.right);
    }

    // Step 2: Update height of the current node
    current.height =
      1 + Math.max(this.height(current.left), this.height(current.right));

    // Step 3: Get the balance factor of this node to check whether it became unbalanced
    const balance = this.getBalance(current);

    // Step 4: If the node is unbalanced, there are 4 possible cases

    // Left-Left (LL) case
    if (balance > 1 && this.getBalance(current.left!) >= 0) {
      return this.rightRotate(current);
    }

    // Left-Right (LR) case
    if (balance > 1 && this.getBalance(current.left!) < 0) {
      current.left = this.leftRotate(current.left!);
      return this.rightRotate(current);
    }

    // Right-Right (RR) case
    if (balance < -1 && this.getBalance(current.right!) <= 0) {
      return this.leftRotate(current);
    }

    // Right-Left (RL) case
    if (balance < -1 && this.getBalance(current.right!) > 0) {
      current.right = this.rightRotate(current.right!);
      return this.leftRotate(current);
    }

    return current; // Return the (potentially new) root node after rebalancing
  }

  private getSuccessor(curr: AVLNode<T>): AVLNode<T> {
    if (curr.right === null) {
      return curr;
    }
    curr = curr.right;
    while (curr !== null && curr.left != null) {
      curr = curr.left;
    }
    return curr;
  }
}

export default AVLTree;
