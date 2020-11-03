/*
 * An implementation of a simple todo object and its 
 * related objects for a todo system using the JS Object type.
 */

 // A JS equivalent of an enum to represent the frequency
// at which a todo is repeated.
const repeatFrequency = {
    ONCE:       "once",
    DAILY:      "daily",
    WEEKDAYS:   "weekdays",
    WEEKLY:     "weekly",
    MONTHLY:    "monthly",
}

// instantiate the todo object
var todo = new Object();

// add properties and values using dot notation
todo.Text = "A task todo";
todo.Important  = true;
todo.Due = new Date();
todo.Repeat = repeatFrequency.DAILY;

// Inspection Code
console.log(todo);

// Create a new one using assign
anotherTodo = Object.assign({}, todo);
anotherTodo.Text = "Another Todo"
console.log(anotherTodo);   

// Create a new one using spread syntax
yetAnotherTodo = {...todo};
yetAnotherTodo.Text = "Yet another todo"
console.log(yetAnotherTodo);    