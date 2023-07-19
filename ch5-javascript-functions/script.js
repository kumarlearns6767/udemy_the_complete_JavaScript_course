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

// Note the difference between parameters and arguments: 
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
printg("name1", "name2"); // this is Arguments.


// They are used to avoid hard coding the values. we can pass required
// values to the function using function_name(value1, value, ...) instead of
// hardcoding them. (i did not understand while learning java. Thanks to thapa technical sir!)

// Why Functions?
// We can define code once and resuse it multiple times using functions.



// What is function expression ?
// -> create a fuction and put it into a variable. example - 

