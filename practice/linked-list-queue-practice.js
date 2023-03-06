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
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        let curr = this.head;
        let count = 0;

        while (curr) {
            count++;
            curr = curr.next;
        }

        return count;
    }

    sumOfNodes() {
        // O(n) time complexity
        let sum = 0;
        let curr = this.head;
        while (curr) {
          sum += curr.value;
          curr = curr.next;
        }
        return sum;
      }

      averageValue() {
        // O(n) time complexity
        
        return this.sumOfNodes() / this.listLength();
      }

      findNthNode(n) {
        // O(n) time complexity
        if (n < 0 || n >= this.length) {
          return null;
        }
        let curr = this.head;
        for (let i = 0; i < n; i++) {
          curr = curr.next;
        }
        return curr;
      }

      findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // Singly linked list implementation:
        if (!this.head) {
          return null;
        }
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
          slow = slow.next;
          fast = fast.next.next;
        }
        return slow;
      }

    reverse() {
        // Returns a new reversed version of the linked list
        let reversedList = new SinglyLinkedList();
        let curr = this.head;
        while (curr) {
            reversedList.addToTail(curr.value);
            curr = curr.next;
        }
        return reversedList;

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
