var BasicNode = /** @class */ (function () {
    function BasicNode(value) {
        this.value = value;
        this.next = null;
    }
    BasicNode.prototype.getValue = function () {
        return this.value;
    };
    BasicNode.prototype.stringifyNode = function () {
        return "".concat(this.value);
    };
    return BasicNode;
}());
export default BasicNode;
