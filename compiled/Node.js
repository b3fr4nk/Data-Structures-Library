class BasicNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    getValue() {
        return this.value;
    }
    stringifyNode() {
        return `${this.value}`;
    }
}
export default BasicNode;
