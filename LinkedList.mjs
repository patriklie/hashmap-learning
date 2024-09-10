import Node from './Node.mjs';

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

    find(data) {
        if (!this.head) {
            console.log('Empty list, nothing to search in.');
            return null;
        }

        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.nodeData === data) {
                return currentNode;
            }
            currentNode = currentNode.nextNode;
        }

        console.log("Data not found in list.");
        return null;
    }

    contains(data) {
        if (!this.head) {
            console.log('Empty list, data not found.');
            return false;
        }

        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.nodeData === data) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }

        console.log("Data not found in list.");
        return false;
    }

    size() {
        if (this.head === null) {
            return 0;
        }

        let currentNode = this.head;
        let count = 0;

        while (currentNode !== null) {
            currentNode = currentNode.nextNode;
            count++;
        }
        return count;
    }

    isEmpty() {
        return this.head === null;
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

    removeTail() {
        if (!this.head) {
            console.error("Empty list nothing to remove.");
            return null;
        }
        
        if (!this.head.nextNode) {
            const removedData = this.head.nodeData;
            this.head = null;
            return removedData;
        }

        let currentHead = this.head;
        while (currentHead.nextNode.nextNode) {
            currentHead = currentHead.nextNode;
        }
        
        const removedData = currentHead.nextNode.nodeData;
        currentHead.nextNode = null;
        return removedData;
    }

    removeByData(data) {
        if (this.head === null) {
            console.error("Empty list nothing to remove.");
            return null;
        }

        if (this.head.nodeData === data) {
            const removedData = this.head.nodeData;
            this.head = this.head.nextNode;
            return removedData;
        }

        let previousNode;
        let currentNode = this.head;

        while (currentNode.nodeData !== data && currentNode !== null) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }

        if (currentNode === null) {
            console.error("Node not found in list, nothing removed.");
            return null;
        } else {
            const removedData = currentNode.nodeData;
            previousNode.nextNode = currentNode.nextNode;
            currentNode.nextNode = null;
            return removedData;
        }
    }

    printList() {
        if (this.head === null) {
            console.log('Empty list, nothing to print.');
            return null;
        } else {
            let list = "START ";
            let currentHead = this.head;

            while (currentHead) {
                list += `-> ${currentHead.data} `;
                currentHead = currentHead.nextNode;
            }

            list += `-> END`;
            console.log(list);
            return;
        }
    }
}

const måneder = new LinkedList();
måneder.addToHead("Januar");
måneder.addToTail("Februar");
måneder.addToTail("Mars");

måneder.printList();