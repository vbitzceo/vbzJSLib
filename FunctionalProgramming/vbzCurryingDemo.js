//Consider the function below
function buildHelloWorld(strHello, strWorld) {
    return strHello + ' ' + strWorld;
}

console.log(buildHelloWorld("Hello", "World"));


// In mathematics and computer science, currying is the technique of
// converting a function that takes multiple arguments into a sequence
// of functions that each take a single argument.
// Lets take the above and do that...
function buildHelloWorldCurry(strHello) {
    return function (strWorld) {
        return strHello + ' ' + strWorld;
    }
}

//Cool lets call it!
console.log(buildHelloWorldCurry("Hello")("World")); 

//Okay so we returned a function from a function and then called it.
//Big deal....
//but consider this:

//Since functions are first class we can treat them like objects
//Therefore: 
var englishHello = buildHelloWorldCurry("Hello");
var spanishHello = buildHelloWorldCurry("Hola");

//and then we can call them:
console.log(englishHello("John"));
console.log(spanishHello("Tina"));

//Now lets to it in ES6
let buildHelloWorldCurryES6 = strHello => strWorld => strHello + " " + strWorld;

console.log(buildHelloWorldCurryES6("Hello")("World"));

let englishHelloES6 = buildHelloWorldCurryES6("Hello");
let spanishHelloES6 = buildHelloWorldCurryES6("Hola");

console.log(englishHelloES6("John"));
console.log(spanishHelloES6("Tina"));

