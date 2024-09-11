import Stack from "../dist/Stack.js"

test("create and append one item to stack", () => {
    const stack = new Stack()

    stack.append(10)

    expect(stack.getHead()).toBe(10)
})

test("find element in stack", () => {
    const stack = new Stack()

    stack.append(1)
    stack.append(2)
    stack.append(3)

    expect(stack.find(2)).toBe(2)
})

test("pop element from stack", () => {
    const stack = new Stack();

    stack.append(1);
    stack.append(2);
    stack.append(3);

    expect(stack.pop()).toBe(3);
})