/*
 * Examples of destructuring arrays 
 *
 * The destructuring assignment syntax is a JavaScript expression that makes it 
 * possible to unpack values from arrays, or properties from objects, into distinct variables.
 */

let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

let a, b, c, d, rest;

console.log("The array: [" + alpha + "]");

//The first two elements
console.log("The first two elements:");
[a, b] = alpha;

console.log(a, b);

//The 3rd and fouth elements
console.log("3rd and fouth elements:");
[,,a,b] = alpha;

console.log(a, b);

//The first two and all the rest
console.log("The first two and all the rest");
[a,b,...rest] = alpha;

console.log(a, b, rest);

//Using const
console.log("Using const");
const [one, two, three,...theRest] = alpha;

console.log(one, two, three, theRest);
