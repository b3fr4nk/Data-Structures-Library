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

  exports.LinkedList = LinkedList;
  exports.Queue = Queue;
  exports.Stack = Stack;

}));
//# sourceMappingURL=bundle.umd.js.map
