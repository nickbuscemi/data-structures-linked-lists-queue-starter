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
        // Add node of val to head of linked list

        //create a new node with the provided value
        const newNode = new SinglyLinkedNode(val);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
        
        // Write your hypothesis on the time complexity of this method here
        // time complexity is 0(1) the operations in this function do not depend on the length of the list therefore it takes a constant amount of time to complete
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // time complexity is 0(n) the operations in this function do depend on the length of the list therefore it takes a linear amount of time to complete

        const newNode = new SinglyLinkedNode(val);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
        return this;
        
    }

    removeFromHead() {
        // Remove node at head
        

        // Write your hypothesis on the time complexity of this method here
        // the time complextiy here is only 0(1) because we only need to update the head pointer and the length of the list
        if (this.head === null) {
            return undefined;
        }
    
        const removeNode = this.head;
        this.head = this.head.next;
        this.length--;
    
        return removeNode;
    }

    removeFromTail() {
        // Remove node at tail
        

        // Write your hypothesis on the time complexity of this method here
        // the time complexity here is 0(n) because we need to traverse the entire list to find the tail
        if (this.head === null) {
            return undefined;
        }

        if (this.head.next === null) {
            const removedNode = this.head;
            this.head = null;
            this.length--;
            return removedNode;
        }

        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }

        const removedNode = current.next;
        current.next = null;

        this.length--;

        return removedNode;
    }

    peekAtHead() {
        // Return value of head node
        

        // Write your hypothesis on the time complexity of this method here
        // the time complexity here is 0(1) because we are only accessing the head node
        if (this.head === null) {
            return undefined;
        }

        return this.head.value;
    }

    print() {
        // Print out the linked list
        
        
        // Write your hypothesis on the time complexity of this method here
        // the time complexity here is 0(n) because we need to traverse the entire list to print it out
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    
    }
}


module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
