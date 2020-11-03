/*
 * An implementation of a simple todo object and its 
 * related objects for a todo system using a JS constructor function.
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

// The Todo object defined using constructor function syntax
function Todo (text, important, due, repeat)   {
    this.Text = text;
    this.Important = important;
    this.Due = due;
    this.Repeat = repeat;
}

// Instantiate
let todo = new Todo("A task todo", true, new Date(), repeatFrequency.DAILY);

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