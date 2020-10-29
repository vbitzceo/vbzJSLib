class vbzQueue {
    constructor() {
        this.collection = [];
    }

    // Adds an element to the queue
    enqueue(element) {
        this.collection.push(element);
    }

    // Pops the next item in the queue
    dequeue() {
        return this.collection.shift();
    }

    // Returns the first items
    front() {
        return this.collection[0];
    }

    // Returns the last item in the queue
    back() {
        return this.collection[this.collection.length - 1];
    }

    // Returns the size of the queue
    size() {
        return this.collection.length;
    }

    // Bool indicating if the queue is empty
    isempty() {
        return this.collection.length === 0;
    }
}