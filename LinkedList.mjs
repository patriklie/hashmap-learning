import Node from './Node.js';

export default class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const currentHead = this.head;
        const newHead = new Node(data);
        this.head = newHead;

        if (currentHead) {
            this.head.nextNode = currentHead;
        }
    }

    addToTail(data) {
        let currentNode = this.head;
        let newTailNode = new Node(data);

        if (currentNode === null) {
            this.head = newTailNode;
        } else {
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newTailNode;
        }
    }

    removeHead() {
        if (!this.head) {
            console.error("Empty list nothing to remove.");
            return null;
        } else {
            const removedHead = this.head.nodeData;
            this.head = this.head.nextNode;
            return removedHead;
        }
    }


}