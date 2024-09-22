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
        return this.arr[this.arr.length - 1];
    };
    MaxHeap.prototype.insert = function (value) {
        var arr = this.arr;
        arr.push(value);
        var i = arr.length - 1;
        while (i > 0 && arr[this.parent(i)] < arr[i]) {
            var p = this.parent(i);
            arr[i], arr[p] = arr[p], arr[i];
            i = p;
        }
    };
    MaxHeap.prototype.extractMax = function (i) {
        var arr = this.arr;
        if (arr.length === 1) {
            return arr.pop();
        }
        var res = arr[0];
        arr[0] = arr[arr.length - 1];
        arr.pop();
        this.maxHeapify(0);
        return res;
    };
    // method assumes all subtrees are already heapified
    MaxHeap.prototype.maxHeapify = function (i) {
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
            arr[i], arr[largest] = arr[largest], arr[largest];
            this.maxHeapify(largest);
        }
    };
    return MaxHeap;
}());
export default MaxHeap;
