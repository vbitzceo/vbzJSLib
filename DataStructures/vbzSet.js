/*
 * Implementation of a Set data structure using 
 * ES6 features.
 */
class vbzSet {
    constructor() {
        this.collection = [];
    }
    
    // Adds a single element to the set
    add(value) { 
        if (!this.has(value))
            this.collection.push(value); 
    }

    // Adds and array of values and elements to the 
    // set
    addFromArray(value) { 
        for(let i = 0; i < value.length; i++)
        {
            this.add(value[i])
        }
    }
    has(value) { return this.collection.indexOf(value) !== -1; }
    
    // Removes an item from the set
    remove(value) {
        if (this.has(value)) {
            delete this.collection[this.collection.indexOf(value)];
        }
    }
    values() { return this.collection.slice();}
    
    // Returns the number of elements in the set
    size() { return this.collection.length }

    // Returns a string of the elements in the set
    // includeTypeInfo is a bool to include type info 
    // for each element
    showValues(includeTypeInfo = false) {
        let retVal = '{';
        this.collection.forEach(function(value, index, collection) {
            retVal += value;
            if (includeTypeInfo)
                retVal += ' (' + typeof(value) + ')';
            if (!((index + 1) === collection.length)) {
                retVal += ', '
            }
        });
        retVal += '}';
        return retVal;
    }

    // Returns a new set that is the union of this
    // set and the passed in set
    union(otherSet) {
        let retVal = new pySet();
        this.collection.forEach(value => retVal.add(value));
        otherSet.values().forEach(value => retVal.add(value));

        return retVal;
    }

    // Returns the elements common to both sets
    intersection(otherSet) {
        let retVal = new pySet();
        for(let i = 0; i < this.collection.length; i++) {
            if (otherSet.has(this.collection[i]))
                retVal.add(this.collection[i])
        }
        return retVal;
    }

    // Returns the elements that this set has  
    // which do not exist in the passed set
    difference(otherSet) {
        let retVal = new pySet();
        for(let i = 0; i < this.collection.length; i++) {
            if (!otherSet.has(this.collection[i]))
                retVal.add(this.collection[i])
        }
        return retVal;
    }

    // Bool as to rather this set is a subset of 
    // the passed in set
    issubset(otherSet) {
        return this.values().every(value => otherSet.has(value));
    }
}