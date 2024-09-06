// import LinkedListNode from "../compiled/LinkedListNode.js";
const linkedListNode = require('../compiled/LinkedListNode')

test("create basic linked list node", () => {
  let node = new linkedListNode(10);

  expect(node.value).toBe(10);
});
