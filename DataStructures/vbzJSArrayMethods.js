/*
 * Exploring some different array methods
 */

arr = [1,2,3,4,5];

console.log("Initial Arryay:");
console.log(arr);

console.log("Calling arr.pop():  returns what it popped off: " + arr.pop() );
console.log(arr);

console.log("Calling arr.push():  returns what we pushed: " + arr.push(5));
console.log(arr);

console.log("Calling arr.shift(): returns the first value in the array and removes it from the array: " + arr.shift());
console.log(arr);

console.log("Calling arr.unshift(1): returns the length of the array after the unshift, adds the passed in arg to the beginning of the array " + arr.unshift(1));
console.log(arr);

console.log("Calling arr.slice(-1): returns a new arry containing the last element of the original array: (does not modify the original array)" + arr.slice(-1));
console.log(arr);