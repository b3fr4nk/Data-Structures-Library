import {BinarySearchTree} from "../dist/bundle.esm"

test("insert node and search for", () => {
    const bst = new BinarySearchTree(10)

    bst.insert(20)

    expect(bst.search(20).getValue()).toBe(20)
})

test("delete node", () => {
    const bst = new BinarySearchTree(10)
    bst.insert(20)
    bst.insert(15)
    bst.insert(40)

    bst.delete(20)

    expect(bst.search(20)).toBe(null)
})

