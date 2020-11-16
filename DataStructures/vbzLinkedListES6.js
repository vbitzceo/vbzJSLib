/*
 * Implementation of a LinkedList data structure using 
 * ES6 features.
 */
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head) {
        if (head != null) {
            this.head = new Node(first);
            this.count = 1;
        }
        else
        {
            this.head = null;
            this.count = 0;
        }
    }

    print (printNodes = false) {
        if (this.count == 0 && this.head == null) {
            console.log("There are not any nodes in this list.");
            return;
        }
        
        let current = this.head;
        let idx = 0;
    
        while(idx < this.count) {
            if (printNodes) {
                console.log({...current});
            } else {
                console.log(current.data);
            }
            if (current.next !== null)
                current = current.next;
            else 
                return;
            idx++;
        }
    }

    clear() {
        this.head = null;
        this.count =0;
    }

    removeAtIndex(idx) {
        //REMOVE HEAD: replace head and decrement count
        if (idx === 0) {
            if (this.head !== null) {
                if (this.head.next !== null) {
                    this.head = this.head.next;
                    this.count--;
                }
            }
        }

        //REMOVE TAIL: Set next to last next to null
        if (idx === this.count - 1)
        {
            let previousTail = this.head;
            let counter = 1;

            while (counter < this.count -1)
            {
                previousTail = previousTail.next;

                counter++;
            }

            previousTail.next = null
            this.count--;
            return;
        }

        //REMOVE Something Else
        let previous = this.head;

        let counter = 1;

        while (counter < idx)
        {
            previous = previous.next;

            counter++;
        }

        previous.next = previous.next.next;
        this.count--;
        return;
    }

    insertAtIndex(data, idx) {
        //Insert Head
        if (idx === 0) {
            let n = new Node(data);
            if (this.head == null) {
                this.head = n;
            } 
            else {
                n.next = new Node(this.head.data, null);
                this.head = n;
            }

            this.count++;
            return
        }


        //Insert Tail
        if (idx > this.count - 1)
        {
            let previousTail = this.head;

            while (previousTail.next != null)
            {
                previousTail = previousTail.next;
            }

            previousTail.next = new Node(data);
            this.count++;
            return;
        }

        //console.log("not head or tail");
        //Insert Somewhere in the list
        // We know head will be prior
        let previous = this.head;

        let counter = 1;

        while(counter < idx) {
            previous = previous.next;
        
            counter++;
        }

        let n = new Node(data, previous.next);
        previous.next = n;

        this.count++;
        return;
    }

    getNode(idx) {
        if (idx > this.count - 1)
        {
            console.log("the passed in index vvalue is greater than the largest index of this list")
        }
        else
        {
            let counter = 0;
            let currentNode = this.head;

            while(counter < idx)
            {
                currentNode = currentNode.next;

                counter++;
            }

            return {...currentNode};
        }
    }

    getTail() {
        if (this.count == 1)
        {
            return {...this.head};
        }

        return {...(this.getNode(this.count - 1))};
    }
}


list = new LinkedList();

for(let i = 1; i < 10; i++)
{
    list.insertAtIndex(i, i-1);
}

console.log("*****************");
console.log("The List:");
console.log("*****************");

list.print();

console.log("*****************");
console.log("Remove index 3:");
console.log("*****************");

list.removeAtIndex(3);

list.print();

console.log(list.getTail());

