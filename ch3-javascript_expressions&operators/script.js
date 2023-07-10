"use strict";
5 + 20;
// here 5 is operand, + is operator and 20 is operand.
// and combination of operator and operand are called expressions.

// There are 6 types of Operators in JavaScript-

// *****  1) Assignment Operator -  *****
// Assignment Operator is used to assign a valur to the left operand based on the value of right operand. Example -
const x = 5;
const y = 5;

// If you want to use === or == operator to compare x and y values then it will only work when they are not concatenated with
// anyone and is printed seperately. Example -
console.log("is x equals to y? " + x === y); // it retuens false.
console.log(x === y); // it returns true.
console.log(x == y); // it returns true.
// Solution is use `` to solve the issue. Example:
console.log(`Is x and y are equal? ${x === y}`);

// We saw above that how the assignment operator '=', '==', and '===' works.

// *****  2) Arithmetic Operator -  *****
// Arithmetic Operators takes numerical values (either literals or variables) as their operands and
// returns a single numeric value.

console.log("3+3? " + 3 + 3); // here '+' is addition operator.
console.log(`3-3? ${3 - 3}`); // here '-' is substraction operator.
console.log("12/3? " + 12 / 3); // here '/' is division operator.
console.log("3*3? " + 3 * 3); // here '*' is multiplication operator.
console.log("3%3? " + (3 % 3)); // here '%' is remainder operator. '%' is also called "modular operator".

// *** Important ***
// Increment and Decrement operator -
// Increment operator is used to increase the value of the operand either bt 1 or more. Example -
let xz = 5;
++xz;
console.log(`Increased Valued of x = ${xz}`);

// There are 2 types of increment and decrement operators -
// postfix - operand++ / operand-- (example xz++ or xz--)
// prefix - ++operand / --operand (example ++xz or --xz)

// postfix is not clear as of now so will  add later
// prefix changes the value of the operand immediately when the increment or decreament operator is applied.

// *****  3) Comparison Operator -  *****
// Comparison operators are used in logical statements to determine equality or difference between variables or values. or
// Comparison operator compares it's operands and returns a logicaal value on
// weather the comparison is true or false.

const ab = 12;
const bc = "12";
const cc = 32;

console.log(`12 is equals to 12? ${12 == 12}`); // here '==' is quality operator. which check weather 2 operand are qeual or not.
console.log(`12's data type is equals to "12"s datatype?  ${12 === "12"}`); // here '===' is strict equality operator operator check weather the datatype of the operands are equal or not.
console.log(`"12" is not equals to 32? ${bc != cc}`); // here '!=' is inequality operator.
// why "" does not work with above console.log()s?

console.log(`Is 12 greater than 11? ${12 > 11}`); //here '>' is greater than operator and '<' is lessthan.
console.log(`Is 12 greater than equals to 11? ${12 >= 11}`); // here '>=' is greater than equals to than operator and '<=' is less than equals to than operator.
console.log(`Is 12 less than 11? ${12 < 11}`); //here '<' is less than operator and '<' is lessthan.
console.log(`Is 12 less than equals to 11? ${12 <= 11}`); // here '<=' is greater than equals to than operator.

// *****  4) Logical Operator -  *****
// Logical operators are typically used with Boolean (logical/true/false) values.
// they return a boolean value.

let aa = 22;
let bf = 21;

// 1) Logical AND (&&) operator -
//  The Logical AND (&&) operator (Logicl Conjuction) is used to check if the set of operands is
// true including all of it's operands is true else it returns false. Example -

console.log(`is aa > bf and bf > 0? ${aa > bf && bf > 0}`); // it returns true because both the comparision is true.
console.log(`is aa > bf and bf > 0? ${aa > bf && bf < 0}`); // it returns false because one of the comparision is  invalid/false.

// 2) Logical OR (||) operator -
//  The Logical OR (||) operator (Logicl disjuction) is used to check if the set of operands is
// true including only one of it's operands is true else it returns false when all of the condition/comparision is false. Example -

console.log(`is aa > bf or bf >= 0? ${aa > bf || bf >= 0}`); // it returns true because both the comparision is true.
console.log(`is aa < bf or bf <= 0? ${aa < bf || bf <= 0}`); // it returns false because all of the comparision is  invalid/false.

// 3) Logical NOT (!) operator -
// Logical NOT (!) is used to check that the operands/conditios/ vise versa is not satisfing with the checking.
// it is also know as logical complememt/negation. Excample -

console.log(`is aa not equals to bf? ${aa != bf}`); // it returns true because the checking is satisfied.
console.log(`is aa not equals aa ${aa != aa}`); // it returns false because the checking is not satisfied.

// Challange time -

// What is output of 3**3?

console.log(`3**3? ${3 ** 3}`);
// here ** is to the power which is doing 3*9 or 3**3 = 27.

// what happens if we add a number with string?

console.log(`12 + "12" = ? ${12 + "12"}`);
// since the number is concatinated so we are getting 1212 ehich is a string.

// write a program to swap 2 numbers -
