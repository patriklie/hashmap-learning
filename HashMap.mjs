import LinkedList from "./LinkedList.mjs";

export default class HashMap {
    constructor(size = 0) {
        this.hashmap = new Array(size).fill(null).map(() => new LinkedList());
    }

    hash(key) {
        hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode += hashCode + key.charCodeAt(i);
        }
        return hashCode % this.hashmap.length; // her begrenser vi størrelsen på hashCoden slik at den ikke går utover arr størrelsen med en modul på array lengden.
    }

    assign(key, value) {
        const index = this.hash(key);
        this.hashmap[index].addToTail({ key, value });
    }

    get(key) {
        const index = this.hash(key);
        const node = this.hashmap[index].findNodeByKey(key);
        return node ? node.data.value : null; // Returner verdien hvis noden finnes, ellers null
    }
    
}