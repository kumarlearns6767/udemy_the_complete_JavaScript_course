"use strict";

// Javascript Function

// alert("Chapter 4 page is incomplete so please do not click \n on any of the program links as it may not work as expected. \n the Issue willbe fixed when lalit lands a job.");

// A JavaScript function is a block of code
// designed to perform a particular task.
// A JavaScript function is executed when
// "something" invokes it (calls it).

// Example -

function sum()
// declaring a function
{ // declaring the body of the function.
    let a = 12,
        b = 13,
        c;
    c = a + b;
    console.log(`Sum of ${a} and ${b} = ${c}`);
}

sum(); // calling a function in order to use it.

// Now, why do we need function and how to identify it? 
// we need function because we do not either want to or to reduce out coding harrashment, to write the same code again and again. So, we create a function where that code is written and we call the function whenever we require that code.
// We identify the function by seein '();' after the function name. Ex- 'alert();' is a function name. This alert(); function is pre-defined function and when we create a function then that iis User Defined function.

// now what is the difference between function parameters and function arguments
// arguments? Answer - 
// Function parameters are the names listed in the function's definition. 
// Function arguments are the real values passed to the function.


// Example -

function printg(gf, bf) // these variables are called parameters
{
    let g = gf;
    let b = bf;
    console.log(`Taken Values are ${g} and ${b}`);
}

// let name1 = prompt(`Please enter a name = `);
// let name2 = prompt(`Please enter 2nd name = `);
// printg("name1", "name2"); // this is Arguments.


// They are used to avoid hard coding the values. we can pass required
// values to the function using function_name(value1, value, ...) instead of
// hardcoding them. (i did not understand while learning java. Thanks to thapa technical sir!)

// Why Functions?
// We can define code once and resuse it multiple times using functions.
// DRY => Don not repeat yourself.


// What is function expression ?
// -> create a fuction and put it into a variable. example - 

function div(c1, c2) {
    const divi = c1 / c2;
    console.log(`Division of ${c1} and ${c2} = ${divi}`);
}

const funExp = div(12, 333); // function is called and stored in a variable at the same time.
// function expression is incomplete without return keyword.

// Example -
function mul(m1, m2) {
    let multip;
    return multip = m1 * m2;
}

let funExp2 = mul(11132, 44323);

console.log(`Multiplication = ${funExp2}`);

// In return function in javascript the return
// statement in JavaScript is written
// the conclusion of the function execution and it
// is used to stop any more function execution and
// return the value. The function's body's final statement is
// always the return statement.


// Anonymous Function -
// It is a function that does not have any name associated with it.
// Normally we use the function keyword before the function name to define
// a function in JavaScript, however, in anonymous functions in JavaScript,
// we use only the function keyword without the function name.

// Example  - 

let funExp3 = function (s2, s3) { //no function name
    let subst;
    return subst = s2 - s3;
}

const substraction = funExp3(2028, 1998); // calling the function and assigning it to a variable name.

console.log(`Substraction = ${substraction}`);




// --------------------- Arrow Functions -----------------------

// Arrow functions are a more concise way to write functions in JavaScript. They were introduced in ECMAScript 6 (ES6) and have become a popular feature due to their simplicity and readability. Arrow functions are particularly useful for writing short, one-liner functions. I'll explain them in-depth with several examples in different scenarios.
// Basic Arrow Function Syntax

// The basic syntax of an arrow function is as follows:

// javascript

// (parameter1, parameter2, ...) => expression

//     parameter1, parameter2, etc.: The parameters that the function takes (if any).
//     expression: The single expression that the function evaluates and returns. This expression becomes the function's return value.

// Example 1: A Simple Arrow Function

// Here's a basic example of an arrow function that takes two parameters and returns their sum:

// javascript

// const add = (a, b) => a + b;
// console.log(add(5, 3)); // Output: 8

// Example 2: Arrow Function with No Parameters

// Arrow functions can also be used with no parameters. Here's an example of an arrow function that returns a constant value:

// javascript

// const greet = () => "Hello, world!";
// console.log(greet()); // Output: Hello, world!

// Example 3: Arrow Function with a Single Parameter

// When there's only one parameter, you can omit the parentheses around the parameter:

// javascript

// const double = number => number * 2;
// console.log(double(6)); // Output: 12

// Example 4: Using Arrow Functions as Callbacks

// Arrow functions are commonly used as callback functions for methods like map, filter, and forEach when you need to perform an operation on each element of an array:

// javascript

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(number => number * 2);
// console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Example 5: Arrow Functions in Object Methods

// Arrow functions can be used as methods in objects. However, note that arrow functions do not have their own this context; they inherit the this value from the surrounding code. This behavior can be both an advantage and a limitation, depending on the use case.

// javascript

// const person = {
//   name: "Alice",
//   sayHello: () => {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };
// person.sayHello(); // Output: Hello, my name is undefined

// In this case, the arrow function doesn't have access to the name property of the person object because it uses the global this context.
// Example 6: Arrow Functions vs. Regular Functions

// Arrow functions and regular functions have some differences. Regular functions have their own this context, whereas arrow functions inherit the this from their surrounding code. This can lead to different behavior in certain situations:

// javascript

// function greetRegular() {
//   console.log(`Hello, my name is ${this.name}`);
// }

// const person1 = {
//   name: "Bob",
//   greet: greetRegular
// };

// const person2 = {
//   name: "Alice",
//   greet: () => {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// person1.greet(); // Output: Hello, my name is Bob
// person2.greet(); // Output: Hello, my name is undefined

// In the example above, person1.greet is a regular function and has access to the name property of the object. In contrast, person2.greet is an arrow function and uses the global this, resulting in an undefined name.

// It's important to choose the appropriate function type based on the specific requirements and the context in which you're using the function. Arrow functions are great for many scenarios, but you should be aware of their behavior with this when using them in object methods.

// Overall, arrow functions are a powerful feature in JavaScript that can help you write more concise and readable code, especially for short functions and callback functions.