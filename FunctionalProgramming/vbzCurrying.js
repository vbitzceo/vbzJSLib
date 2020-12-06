// Currying allows us to partially specify parameters
let buildPerson = firstName => lastName => Object.assign({},{ firstName: firstName, lastName: lastName});

// lets use this to make several people with the same first name
let partialPerson = buildPerson("John");

let arrPeople = [];
arrPeople.push(partialPerson("Doe"));
arrPeople.push(partialPerson("Smith"));

arrPeople.forEach(person => {
    console.log(person.firstName + ' ' + person.lastName);
})