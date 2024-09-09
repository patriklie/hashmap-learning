export default class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

    get nodeData() {
        return this.data;
    }

    get nextNode() {
        return this.next;
    }

    set nextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw new Error('This node is not from the Node class.');
        }
    }
}