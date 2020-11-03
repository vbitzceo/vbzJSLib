/*
 * An implementation of a simple todo object and its 
 * related objects for a todo system using object literals.
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

// The todo object defined using object literal syntax
todo = {
    Text:       "A task todo",
    Important:  true,
    Due:        new Date(),
    Repeat:     repeatFrequency.DAILY
}

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