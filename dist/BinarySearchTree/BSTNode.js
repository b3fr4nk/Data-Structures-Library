var BSTNode = /** @class */ (function () {
    function BSTNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    BSTNode.prototype.getValue = function () {
        return this.value;
    };
    BSTNode.prototype.setValue = function (value) {
        this.value = value;
    };
    return BSTNode;
}());
export default BSTNode;
