/*
 * Implementation of a Stack data structure using 
 * ES6 features.
 */
class vbzStack {
    constructor() {
        this.count = 0;
        this.storage  = [];
    }
    
    // Pushes a value onto the stack 
    // and increments the counter
    push = value => {
        this.storage.push(value);
        this.count++;
    }

    // Pops a value off the stack
    // and decrements the counter
    pop = () => {
        if (this.count > 0)
            this.count--;
        return this.storage.pop();
    }

    // Returns the last added value on the stack
    peek = () => {
        return this.storage.slice(-1)[0];
    }

    // Returns the number of items in the stack
    size = () => {
        return this.count;
    }
}