"use strict";

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