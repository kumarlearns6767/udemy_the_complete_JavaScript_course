"use strict";

// Type Conversion IN JAVASCRIPT -

// Javascript converts any data taken from outside(user input) to String Data Type. It is done automaticall and by default. This is one of the reason Type Conversion is required in Javascript to perfrom the things/operation/tasks we want to do in Javascript.

// The type of a variable is identified by two thing:
// 1) typeof operator
// 2) typoof() function
// Both works same, the only difference is One is operator and other is function and uses are based on scenarios/situations.

// typeof operator -
// Typeof in JavaScript is an operator used for type checking and returns the data type of the operand passed to it. The operand can be any variable, function, or object whose type you want to find out using the typeof operator.

// Example - 
let number = 12, nam = 'lalu', decesion = true, andnumber2 = 12.88;

console.log(`typeof number = ${typeof number}, typeof nam = ${typeof nam}, typeof decesion = ${typeof decesion}, typeof andnumber2 = ${typeof andnumber2}`);

// In above example we demostrated that how 'typeof operator' is used to identify the type of a variable.

//typeof() function -
// The TypeOf function is an important tool when dealing with complex code. It allows a programmer to quickly check a variable's data type—or whether it's “undefined” or “null”—without going through the code line by line! Additionally, the TypeOf function can also check whether an operand is an object or not.

// Example - 
const numbe = 12, namm = 'lalu', dece = true, andnum = 12.88;

console.log(`typeof number = ${typeof (numbe)}, typeof nam = ${typeof (namm)}, typeof decesion = ${typeof (dece)}, typeof andnumber2 = ${typeof (andnum)}`);

// Automatic Type conversion -
// When we do any operation and if javascript is capable to understand that and needs to convert type of datatype in order to complete the operation then, javascript "automatically converts type of that datatype using it's intelligence". This is called "Automatic Type conversion".

// Example - 
// 1st example - 
let conversion = 5 + null;  // how null is converted from onject to number datatype ?
console.log(`Final result after Automatic Type conversion  = ${conversion}`);

// In the above example, "5" is added to "null" which is not possible technically because null means nothing and this will throw error in other programming languages but here in Javascript, it converts "null" to "0" so, 5+0 = 5;

console.log(typeof null);   // To check the default datatype of null. 

// 2nd example - 
let con2 = "5" + null;
console.log(`Final result after 2nd Automatic Type conversion = ${con2}`);

// In the above example, ' "5" ' is added to "null" which is not possible technically because null means nothing and this will throw error in other programming languages but here in Javascript, it converts "null" to String datatype so, 5+null = 5null;

// 3nd example - 
let con3 = "5" - 11;
console.log(`Final result after 2nd Automatic Type conversion = ${con3}`);

// In the above example, ' "5" ' is substracted to 11 which is not possible technically because "5" is string and 11 is number and "5" must be converted to number to do that and this will throw error in other programming languages but here in Javascript, it converts "5" to Number datatype which is called "type coercion".