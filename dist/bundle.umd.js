(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MyLibrary = {}));
})(this, (function (exports) { 'use strict';

  var BasicNode = /** @class */ (function () {
      function BasicNode(value) {
          this.value = value;
          this.next = null;
      }
      BasicNode.prototype.getValue = function () {
          return this.value;
      };
      BasicNode.prototype.stringifyNode = function () {
          return "".concat(this.value);
      };
      return BasicNode;
  }());

  var Queue = /** @class */ (function () {
      function Queue() {
          this.head = null;
      }
      Queue.prototype.enqueue = function (value) {
          var newNode = new BasicNode(value);
          if (this.head === null) {
              this.head = newNode;
          }
          else {
              var currentNode = this.head;
              while (currentNode.next !== null) {
                  currentNode = currentNode.next;
              }
              currentNode.next = newNode;
          }
      };
      Queue.prototype.dequeue = function () {
          if (this.head === null) {
              return null;
          }
          var currentHead = this.head;
          this.head = currentHead.next;
          return currentHead.getValue();
      };
      Queue.prototype.peek = function () {
          if (this.head === null) {
              return null;
          }
          return this.head.getValue();
      };
      Queue.prototype.isEmpty = function () {
          if (this.head === null) {
              return true;
          }
          return true;
      };
      Queue.prototype.size = function () {
          var count = 0;
          if (this.head === null) {
              return 0;
          }
          var currentNode = this.head;
          while (currentNode.next !== null) {
              currentNode = currentNode.next;
              count++;
          }
          return count;
      };
      Queue.prototype.getHead = function () {
          if (this.head === null) {
              return null;
          }
          else {
              return this.head.getValue();
          }
      };
      return Queue;
  }());

  var LinkedListNode = /** @class */ (function () {
      function LinkedListNode(value) {
          this.value = value;
          this.next = null;
      }
      LinkedListNode.prototype.hasNext = function () {
          if (this.next == null) {
              return false;
          }
          return true;
      };
      LinkedListNode.prototype.getValue = function () {
          return this.value;
      };
      LinkedListNode.prototype.setValue = function (value) {
          this.value = value;
      };
      LinkedListNode.prototype.getNext = function () {
          return this.next;
      };
      LinkedListNode.prototype.setNext = function (next) {
          this.next = next;
      };
      LinkedListNode.prototype.stringifyNode = function () {
          return "".concat(this.getValue());
      };
      return LinkedListNode;
  }());

  var LinkedList = /** @class */ (function () {
      function LinkedList() {
          this.head = null;
      }
      LinkedList.prototype.getHead = function () {
          return this.head;
      };
      LinkedList.prototype.append = function (value) {
          var newNode = new LinkedListNode(value);
          if (this.head === null) {
              this.head = newNode;
          }
          else {
              var currentNode = this.head;
              while (currentNode.next !== null) {
                  currentNode = currentNode.next;
              }
              currentNode.setNext(newNode);
          }
      };
      LinkedList.prototype.insert = function (value, position) {
          if (this.head === null) {
              return false;
          }
          var index = 0;
          var currentNode = this.head;
          var node = new LinkedListNode(value);
          if (position === 0) {
              node.next = this.head;
              this.head = node;
              return true;
          }
          if (currentNode === null) {
              return false;
          }
          while (currentNode.next !== null) {
              index++;
              if (index === position) {
                  node.next = currentNode.next;
                  currentNode.next = node;
              }
              currentNode = currentNode.next;
          }
          return false;
      };
      LinkedList.prototype.find = function (value) {
          if (this.head === null) {
              return null;
          }
          var currentNode = this.head;
          while (currentNode.getValue() !== value) {
              // check if this is the end of the linked list
              if (currentNode === null) {
                  return null;
              }
              // continue searching
              currentNode = currentNode.next;
          }
          return currentNode;
      };
      LinkedList.prototype.stringifyList = function () {
          if (this.head === null) {
              return "";
          }
          var listString = "";
          var currentNode = this.head;
          while (currentNode.next !== null) {
              listString += "".concat(currentNode.stringifyNode(), " > ");
              currentNode = currentNode.next;
          }
          listString += "".concat(currentNode.stringifyNode());
          return listString;
      };
      return LinkedList;
  }());

  var Stack = /** @class */ (function () {
      function Stack() {
          this.head = null;
      }
      Stack.prototype.getHead = function () {
          if (this.head === null) {
              return null;
          }
          return this.head.getValue();
      };
      Stack.prototype.append = function (value) {
          if (this.head === null) {
              this.head = new BasicNode(value);
          }
          else {
              var currentNode = this.head;
              var newNode = new BasicNode(value);
              newNode.next = currentNode;
              this.head = newNode;
          }
      };
      Stack.prototype.pop = function () {
          if (this.head === null) {
              throw new Error("Cannot pop an empty stack");
          }
          var poppedNode = this.head;
          this.head = poppedNode.next;
          return poppedNode.getValue();
      };
      Stack.prototype.find = function (value) {
          if (this.head === null) {
              return null;
          }
          var currentNode = this.head;
          while (currentNode.getValue() !== value) {
              // check if this is the end of the linked list
              if (currentNode === null) {
                  return null;
              }
              // continue searching
              currentNode = currentNode.next;
          }
          return currentNode.getValue();
      };
      Stack.prototype.peek = function () {
          if (this.head === null) {
              return null;
          }
          return this.head.getValue();
      };
      return Stack;
  }());

  var BSTNode = /** @class */ (function () {
      function BSTNode(value) {
          this.value = value;
          this.left = null;
          this.right = null;
      }
      BSTNode.prototype.getValue = function () {
          return this.value;
      };
      BSTNode.prototype.setValue = function (value) {
          this.value = value;
      };
      return BSTNode;
  }());

  var BinarySearchTree = /** @class */ (function () {
      function BinarySearchTree(rootValue) {
          this.root = new BSTNode(rootValue);
      }
      BinarySearchTree.prototype.insert = function (value, current) {
          if (current === void 0) { current = this.root; }
          if (current === null) {
              return new BSTNode(value);
          }
          if (current.getValue() === value) {
              return current;
          }
          if (value < current.getValue()) {
              current.left = this.insert(value, current.left);
          }
          else if (value > current.getValue()) {
              current.right = this.insert(value, current.right);
          }
          return current;
      };
      BinarySearchTree.prototype.search = function (value, current) {
          if (current === void 0) { current = this.root; }
          // value found or does not exist
          if (current === null || current.getValue() === value) {
              return current;
          }
          // value is smaller than current
          if (value < current.getValue()) {
              return this.search(value, current.left);
          }
          // value is larger than current
          return this.search(value, current.right);
      };
      BinarySearchTree.prototype.delete = function (value, current) {
          if (current === void 0) { current = this.root; }
          // check to see if it exists
          if (current === null) {
              return current;
          }
          if (current.getValue() > value) {
              current.left = this.delete(value, current.left);
          }
          else if (current.getValue() < value) {
              current.right = this.delete(value, current.right);
          }
          else {
              // no left sub tree
              if (current.left === null) {
                  return current.right;
              }
              // no right sub tree
              if (current.right === null) {
                  return current.left;
              }
              // when both sub trees exist
              var successor = this.getSuccessor(current);
              current.setValue(successor.getValue());
              current.right = this.delete(value, current.right);
          }
          return current;
      };
      BinarySearchTree.prototype.getSuccessor = function (curr) {
          if (curr.right === null) {
              return curr;
          }
          curr = curr.right;
          while (curr !== null && curr.left != null) {
              curr = curr.left;
          }
          return curr;
      };
      return BinarySearchTree;
  }());

  var MaxHeap = /** @class */ (function () {
      function MaxHeap() {
          this.arr = [];
      }
      MaxHeap.prototype.left = function (i) {
          return 2 * i + 1;
      };
      MaxHeap.prototype.right = function (i) {
          return 2 * i + 2;
      };
      MaxHeap.prototype.parent = function (i) {
          var p = Math.floor((i - 1) / 2);
          return p;
      };
      MaxHeap.prototype.getMax = function () {
          return this.arr[0];
      };
      MaxHeap.prototype.insert = function (value) {
          var _a;
          this.arr.push(value);
          var i = this.arr.length - 1;
          while (i > 0 && this.arr[this.parent(i)] < this.arr[i]) {
              var p = this.parent(i);
              _a = [this.arr[p], this.arr[i]], this.arr[i] = _a[0], this.arr[p] = _a[1];
              i = p;
          }
      };
      MaxHeap.prototype.extractMax = function (i) {
          if (this.arr.length === 0) {
              return undefined;
          }
          if (this.arr.length === 1) {
              return this.arr.pop(); // Handle single element heap
          }
          var res = this.arr[0];
          this.arr[0] = this.arr[this.arr.length - 1];
          this.arr.pop();
          this.maxHeapify(0);
          return res;
      };
      // method assumes all subtrees are already heapified
      MaxHeap.prototype.maxHeapify = function (i) {
          var _a;
          var arr = this.arr;
          var n = arr.length;
          if (n === 1) {
              return;
          }
          var left = this.left(i);
          var right = this.right(i);
          var largest = i;
          if (left < n && arr[left] > arr[largest]) {
              largest = left;
          }
          if (right < n && arr[right] > arr[largest]) {
              largest = right;
          }
          if (largest !== i) {
              _a = [arr[largest], arr[i]], arr[i] = _a[0], arr[largest] = _a[1];
              this.maxHeapify(largest);
          }
          this.arr = arr;
      };
      return MaxHeap;
  }());

  var AVLNode = /** @class */ (function () {
      function AVLNode(key) {
          this.key = key;
          this.left = null;
          this.right = null;
          this.height = 1;
      }
      AVLNode.prototype.getValue = function () {
          return this.key;
      };
      AVLNode.prototype.setValue = function (value) {
          this.key = value;
      };
      return AVLNode;
  }());

  var AVLTree = /** @class */ (function () {
      function AVLTree(rootValue) {
          this.root = new AVLNode(rootValue);
      }
      AVLTree.prototype.height = function (node) {
          var _a;
          return (_a = node === null || node === void 0 ? void 0 : node.height) !== null && _a !== void 0 ? _a : 0;
      };
      AVLTree.prototype.getBalance = function (node) {
          return node ? this.height(node.left) - this.height(node.right) : 0;
      };
      AVLTree.prototype.rightRotate = function (y) {
          var x = y.left;
          var T2 = x.right;
          // Perform rotation
          x.right = y;
          y.left = T2;
          // Update heights
          y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
          x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
          // Return new root
          return x;
      };
      AVLTree.prototype.leftRotate = function (x) {
          var y = x.right;
          var T2 = y.left;
          // Perform rotation
          y.left = x;
          x.right = T2;
          // Update heights
          x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
          y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
          // Return new root
          return y;
      };
      AVLTree.prototype.insert = function (value) {
          var newVal = this.doInsert(value);
          if (newVal === null) {
              return;
          }
          this.insertRoot(newVal.key);
      };
      AVLTree.prototype.doInsert = function (value, current) {
          if (current === void 0) { current = this.root; }
          if (current === null) {
              return new AVLNode(value);
          }
          if (value < current.getValue()) {
              current.left = this.doInsert(value, current.left);
          }
          else if (value > current.getValue()) {
              current.right = this.doInsert(value, current.right);
          }
          else {
              return current; // duplicate keys are not allowed
          }
          // Update the height of the current node
          current.height =
              1 + Math.max(this.height(current.left), this.height(current.right));
          // Get the balance factor
          var balance = this.getBalance(current);
          // Balance the tree if needed
          // Left-Left case
          if (balance > 1 && this.getBalance(current.left) >= 0) {
              return this.rightRotate(current);
          }
          // Right-Right case
          if (balance < -1 && this.getBalance(current.right) <= 0) {
              return this.leftRotate(current);
          }
          // Left-Right case
          if (balance > 1 && this.getBalance(current.left) < 0) {
              current.left = this.leftRotate(current.left);
              return this.rightRotate(current);
          }
          // Right-Left case
          if (balance < -1 && this.getBalance(current.right) > 0) {
              current.right = this.rightRotate(current.right);
              return this.leftRotate(current);
          }
          return current;
      };
      AVLTree.prototype.insertRoot = function (value) {
          this.root = this.doInsert(value, this.root);
      };
      AVLTree.prototype.getMinValueNode = function (node) {
          var current = node;
          while (current.left !== null) {
              current = current.left;
          }
          return current;
      };
      AVLTree.prototype.delete = function (value, current) {
          if (current === void 0) { current = this.root; }
          // Step 1: Perform standard BST deletion
          if (current === null) {
              return current; // Base case: the node is not found
          }
          if (value < current.getValue()) {
              // If the value to be deleted is smaller than the root's value, then it lies in the left subtree
              current.left = this.delete(value, current.left);
          }
          else if (value > current.getValue()) {
              // If the value to be deleted is larger than the root's value, then it lies in the right subtree
              current.right = this.delete(value, current.right);
          }
          else {
              // Node with only one child or no child
              if (current.left === null) {
                  return current.right; // If no left child, replace node with right child
              }
              else if (current.right === null) {
                  return current.left; // If no right child, replace node with left child
              }
              // Node with two children: Get the in-order successor (smallest in the right subtree)
              var successor = this.getMinValueNode(current.right);
              // Copy the successor's value to this node
              current.setValue(successor.getValue());
              // Delete the in-order successor
              current.right = this.delete(successor.getValue(), current.right);
          }
          // Step 2: Update height of the current node
          current.height =
              1 + Math.max(this.height(current.left), this.height(current.right));
          // Step 3: Get the balance factor of this node to check whether it became unbalanced
          var balance = this.getBalance(current);
          // Step 4: If the node is unbalanced, there are 4 possible cases
          // Left-Left (LL) case
          if (balance > 1 && this.getBalance(current.left) >= 0) {
              return this.rightRotate(current);
          }
          // Left-Right (LR) case
          if (balance > 1 && this.getBalance(current.left) < 0) {
              current.left = this.leftRotate(current.left);
              return this.rightRotate(current);
          }
          // Right-Right (RR) case
          if (balance < -1 && this.getBalance(current.right) <= 0) {
              return this.leftRotate(current);
          }
          // Right-Left (RL) case
          if (balance < -1 && this.getBalance(current.right) > 0) {
              current.right = this.rightRotate(current.right);
              return this.leftRotate(current);
          }
          return current; // Return the (potentially new) root node after rebalancing
      };
      AVLTree.prototype.getSuccessor = function (curr) {
          if (curr.right === null) {
              return curr;
          }
          curr = curr.right;
          while (curr !== null && curr.left != null) {
              curr = curr.left;
          }
          return curr;
      };
      return AVLTree;
  }());

  exports.AVLTree = AVLTree;
  exports.BinarySearchTree = BinarySearchTree;
  exports.LinkedList = LinkedList;
  exports.MaxHeap = MaxHeap;
  exports.Queue = Queue;
  exports.Stack = Stack;

}));
//# sourceMappingURL=bundle.umd.js.map
