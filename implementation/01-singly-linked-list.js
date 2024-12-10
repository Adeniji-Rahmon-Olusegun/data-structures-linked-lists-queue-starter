// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 

        const newNode = new SinglyLinkedNode(val);

        newNode.next = this.head;
        
        this.head = newNode;

        this.length++;

        return this;
        
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            
            this.head = newNode;

            this.length++;

            return this;
        }

        let curr = this.head;
        
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;

        this.length++;

        return this;
    }

    removeFromHead() {
        // Remove node at head

        let tempHead = this.head;

        if (this.length === 0) {
            return undefined
        } else if (this.length === 1) {
            
            this.head = null;

            this.length--;

            return tempHead;
        }

        this.head = this.head.next;

        this.length--;

        return tempHead;
    }

    removeFromTail() {
        // Remove node at tail

        // Write your hypothesis on the time complexity of this method here

        if (this.length === 0) return undefined;

        let current = this.head;

        if (this.length === 1) {
            
            this.head = null;

            this.length--;

            return current;
        }

        while (current.next.next) {
            current = current.next
        }

        let tempTail = current.next;

        current.next = null;

        this.length--;

        return tempTail;
    }

    peekAtHead() {
        // Return value of head node

        // Write your hypothesis on the time complexity of this method here

        if (this.head) return this.head.value;
    }

    print() {
        // Print out the linked list
        
        // Write your hypothesis on the time complexity of this method here

        if (this.head) {
            let current = this.head;

            while (current) {
                //process.stdout.write(`${current.value} -> `);

                console.log(current.value);

                current = current.next;
            }

            //console.log();
        }
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
