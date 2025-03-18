
// Function to greet a user
function greet(name) {
    let name = "Pinky";  // String
    console.log("Hello, " + name + "! Welcome to JavaScript.");
}

// Variables and data types
let age = 25;  // Number
let name = "Pinky";  // String
let isLearning = true;  // Boolean

// Using the function
greet(name);

// Conditional statement
if (isLearning) {
    console.log(name + " is learning JavaScript!");
} else {
    console.log(name + " is not learning JavaScript.");
}

// Loop example
for (let i = 1; i <= 5; i++) {
    console.log("Counting: " + i);
}

// Array example
let colors = ["Red", "Blue", "Green"];
console.log("First color: " + colors[0]);

// Object example
let person = {
    name: "Pinky",
    age: 25,
    hobby: "Coding"
};
console.log("Person's name is " + person.name);

// Function with return value
function addNumbers(a, b) {
    return a + b;
}
console.log("Sum: " + addNumbers(5, 10));

