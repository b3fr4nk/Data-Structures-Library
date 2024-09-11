import Queue from "../dist/Queue.js";

test("create and enqueue one item to queue", () => {
  const queue = new Queue();

  queue.enqueue(10);

  expect(queue.getHead()).toBe(10);
});

test("peek element in queue", () => {
  const queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  expect(queue.peek()).toBe(1);
});

test("dequeue element from queue", () => {
  const queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);

  expect(queue.dequeue()).toBe(1);
  expect(queue.peek()).toBe(2)
});
