import {MaxHeap} from "../dist/bundle.esm.js"

test("insert element into max heap", () => {
    const h = new MaxHeap()
    h.insert(1)
    h.insert(3)
    h.insert(5)
    h.insert(9)
    h.insert(45);
    h.insert(6)
    h.insert(8)
    
    expect(h.getMax()).toBe(45)
})

test("extract max", () => {
    const h = new MaxHeap()

    h.insert(1);
    h.insert(3);
    h.insert(5);
    h.insert(9);
    h.insert(45);
    h.insert(6);
    h.insert(8);

    let extracted = h.extractMax()

    expect(extracted).toBe(45)
    expect(h.getMax()).toBe(9)
})