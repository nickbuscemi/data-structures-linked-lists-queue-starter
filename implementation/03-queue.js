const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        const newNode = new SinglyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
          } else {
            this.tail.next = newNode;
          }
          this.tail = newNode;
          this.length++;
          return this.length;

        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if (!this.head) return null;
        const removedNode = this.head;
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        this.length--;
        return removedNode.value;
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
