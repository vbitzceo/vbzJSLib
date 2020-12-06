// Currying allows us to partially specify parameters
let buildPerson = firstName => lastName => Object.assign({},{ firstName: firstName, lastName: lastName});

//the above could be written as follows:
// let buildPerson = function(firstName) {
//     return function(lastName) {
//         //NOTE: this function creates a closure which holds on to
//         //the properties and their values in the LEXICAL environment at this time
//         //this is why partial's work
//         return Object.assign({},{ firstName: firstName, lastName: lastName});
//     }
// }

// lets use this to make several people with the same first name
let partialPerson = buildPerson("John");

let arrPeople = [];
arrPeople.push(partialPerson("Doe"));
arrPeople.push(partialPerson("Smith"));

arrPeople.forEach(person => {
    console.log(person.firstName + ' ' + person.lastName);
})