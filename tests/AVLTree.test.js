import { AVLTree } from "../dist/bundle.esm";

test("test insert", ()=> {
    const tree = new AVLTree(6)
    tree.insert(7)
    tree.insert(4)
    tree.insert(8);

    expect(tree.root.left.key).toBe(4)
    expect(tree.root.right.right.key).toBe(8)
    expect(tree.root.right.key).toBe(7)
})

test("delete", () => {
    const tree = new AVLTree(6);
    tree.insert(7);
    tree.insert(4);
    tree.insert(8);

    tree.delete(7)

    expect(tree.root.left.key).toBe(4);
    expect(tree.root.right.key).toBe(8);
})