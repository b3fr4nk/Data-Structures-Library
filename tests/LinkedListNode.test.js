import LinkedListNode from "../compiled/LinkedListNode.js";
test("create basic linked list node", () => {
  let node = new LinkedListNode(10);

  expect(node.getValue()).toBe(10);
});
