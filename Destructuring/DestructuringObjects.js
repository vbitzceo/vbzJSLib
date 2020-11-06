/*
 * Examples of destructuring objects 
 *
 * The destructuring assignment syntax is a JavaScript expression that makes it 
 * possible to unpack values from arrays, or properties from objects, into distinct variables.
 */

 let person = {
     FirstName: "John",
     LastName: "Doe",
     Address: {
         Street: "123 Any Street",
         Town: "Anytown",
         City: "Any City",
         State: "AS",
         ZIP: "12345"
     }
 }

 
 // Put the first name and last name into vars
 let {FirstName: fName, LastName: lName} = person;

 console.log(fName, lName);

 // put the street name into the constant "street" var
 const {Address: {Street: street}} = person;

 // put City into the City var (note I reuse the City text here)
 let {Address: {City}} = person;

 console.log(street);
 console.log(City);