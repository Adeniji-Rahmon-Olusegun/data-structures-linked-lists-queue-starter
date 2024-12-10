// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            //return this.head;
        } else {
            let curr = this.head;

            while (curr.next) {
                curr = curr.next;
            }

            curr.next = newNode;
        }

        this.length++;

        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

        return this.length;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        // Write your hypothesis on the time complexity of this method here

        if (!this.head) return 0;
        
        let sum = 0;
        let current = this.head;

        while (current) {
            sum += current.value;
            current = current.next;
        }

        return sum;
    }

    averageValue() {
        // Returns the average value of all the nodes

        // Write your hypothesis on the time complexity of this method here

        let sumTotal = this.sumOfNodes();
        let totalNumElements = this.listLength();

        let avgVal = sumTotal / totalNumElements;

        return avgVal;
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        // Write your hypothesis on the time complexity of this method here

        if ( n < 0 || n > this.length - 1 ) return null;

        let count = 0;
        let current = this.head;

        while (current && count < n) {
            
            current = current.next;
            count++;
        }

        return current;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here

        let count = 0;
        let current = this.head;

        while (current && count < Math.round(this.length / 2) - 1) {

            current = current.next;

            count++;
        }

        return current;
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here

        let currentNode = this.head;
        this.head = null;

        while (currentNode) {
            
            let newNode = new SinglyLinkedNode(currentNode.value);

            newNode.next = this.head;

            this.head = newNode;

            currentNode = currentNode.next;
        }

        return this;

    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
        let currentNode = this.head;
        let nextNode = this.head;
        let previousNode = null;

        while (nextNode) {
            nextNode = nextNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }

        this.head = previousNode;
    }

    print() {
        let current = this.head;

        while (current) {
            process.stdout.write(`${current.value} -> `);

            current = current.next;
        }

        console.log("NULL");
    }
}

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

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;

        this.length++;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method her
        let count = 0;

        let current = this.head;

        while (current && count < Math.round(this.length / 2) - 1) {
            current = current.next;

            count++;
        }

        return current;
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here

        let current = this.head;

        this.head = null;

        while (current) {

            let newNode = new DoublyLinkedNode(current.value);

            if (!this.head) {
                this.tail = newNode
            } else {
                newNode.next = this.head;
                this.head.prev = newNode;
            }

            this.head = newNode;

            current = current.next;
            
        }

        return this;
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
        let currentNode = this.head;
        let nextNode;

        while (currentNode) {
            nextNode = currentNode.next;
            //nextNode.next = currentNode;
            currentNode.next = currentNode.prev;
            currentNode.prev = nextNode;
            currentNode = nextNode;
        }

        this.head = this.tail;
    }

    print() {
        let current = this.head;

        while (current) {
            process.stdout.write(`${current.value} -> `);

            current = current.next;
        }

        console.log("NULL");
    }
}

let list = new DoublyLinkedList();

list.addToTail(5);
list.addToTail(34);
list.addToTail(8);
list.addToTail(25);
list.addToTail(55);
list.addToTail(3);
list.addToTail(6);

console.log("before reversal:");

list.print();
console.log("====================");

list.reverse();

console.log("After reversal:");

list.print();
//console.log("====================");

// console.log(list.findNthNode(5));
// console.log(list.listLength())

// console.log(list.findMid().value);

// console.log(list.reverse());

// console.log(list.head.value);

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
