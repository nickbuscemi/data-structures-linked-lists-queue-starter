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

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            } else {
        newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
          } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
          }
      
        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        if (this.length === 0) {
            return undefined;
          }
      
          let removedNode = this.head;
      
          if (this.length === 1) {
            this.head = null;
            this.tail = null;
          } else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
          }
      
          this.length--;
          return removedNode.value;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (this.length === 0) {
            return undefined;
          }
      
          let removedNode = this.tail;
      
          if (this.length === 1) {
            this.head = null;
            this.tail = null;
          } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
          }
      
          this.length--;
          return removedNode.value;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        return this.head ? this.head.value : undefined;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        return this.tail ? this.tail.value : undefined;
        
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
