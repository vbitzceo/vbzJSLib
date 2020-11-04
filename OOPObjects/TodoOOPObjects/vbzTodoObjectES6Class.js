/*
 * An implementation of a simple todo object and its 
 * related objects for a todo system using ES6 Class Syntax.
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

// The Todo object defined using an ES 6 Class
class Todo {
    constructor(text, important, due, repeat) {
        this.Text = text;
        this.Important = important;
        this.Due = due;
        this.Repeat = repeat;
    }
}

// Instantiate
let todo = new Todo("A task todo", true, new Date(), repeatFrequency.DAILY);

// Inspection Code
console.log(todo);
