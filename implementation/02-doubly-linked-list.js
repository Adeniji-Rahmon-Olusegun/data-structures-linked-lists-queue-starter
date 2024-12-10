// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        newNode.next = this.head;

        if (!this.head && this.length === 0) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        // Write your hypothesis on the time complexity of this method here

        let newNode = new DoublyLinkedNode(val);

        if (!this.head && this.length === 0) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;

        this.length++;
    }

    removeFromHead() {
        // Remove node at head

        // Write your hypothesis on the time complexity of this method here
        if (!this.head && this.length === 0) return;

        let tempHeadVal = this.head.value;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head.next.prev = null;
            this.head = this.head.next;
        }

        this.length--;

        return tempHeadVal;
    }

    removeFromTail() {
        // Remove node at tail

        // Write your hypothesis on the time complexity of this method here

        if (!this.head && this.length === 0) return;

        let tempTailVal = this.tail.value;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
        }

        this.length--;

        return tempTailVal;
    }

    peekAtHead() {
        // Return value of head node

        // Write your hypothesis on the time complexity of this method here
        if (this.head) return this.head.value;
    }

    peekAtTail() {
        // Return value of tail node
        
        // Write your hypothesis on the time complexity of this method here
        if (this.tail) return this.tail.value;
    }
}


// let lld = new DoublyLinkedList();

// lld.addToTail(5);

// console.log(lld.removeFromHead());

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
