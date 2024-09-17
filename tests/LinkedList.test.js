import {LinkedList} from "../dist/bundle.esm"

test("append to linked list", () => {
    const list = new LinkedList()
    list.append(10)

    expect(list.head.value).toBe(10)
})

test("find node by value", () => {
    const list = new LinkedList()
    list.append(10)
    list.append(15)
    list.append(35)

    expect(list.find(15).getValue()).toBe(15)
})