"use strict";

// Javascript Strings.

// What is strings in Javascript ?
// A JavaScript string stores a series of characters like "John Doe". A string can be any text inside double or single quotes: let carName1 = "Volvo XC60"; let carName2 = 'Volvo XC60';

// JavaScript string is a primitive data type that is used to work with texts. For example, const name = 'John';

// Create JavaScript Strings

// In JavaScript, strings are created by surrounding them with quotes. There are three ways you can use quotes.

//     Single quotes: 'Hello'
//     Double quotes: "Hello"
//     Backticks: `Hello`

// For example,

//strings example
const name = "Peter";
const name1 = "Jack";
const result = `The names are ${name} and ${name1}`;
console.log(`rsult of declaring a string = ${result}`);

// Escape characters in JavaScript-
// Javascript uses '\' (backslash) in front as an escape character. To print quotes, using escape characters we have two options: For single quotes: \' (backslash followed by single quote) For double quotes: \” (backslash followed by double quotes)

// Example  -
console.log(
    'This is an example of "Escape Charater" where backslash double quote is used as an escape character'
);

// Access String Characters

// You can access the characters in a string in two ways.

// One way is to treat strings as an array. For example,

let a = "hello";
console.log(a[1]); // "e"

// Another way is to use the method charAt(). For example,

let ab = "hello";
console.log(`The output is = ${ab.charAt(1)}`); // "e"

// JavaScript Strings are immutable

// In JavaScript, strings are immutable. That means the characters of a string cannot be changed. For example,

// let ac = "hello";
// ac[0] = "H";
// console.log(ac); // "hello"

// However, you can assign the variable name to a new string. For example,

let ad = "hello";
ad = "Hello";
console.log(ad); // "Hello"

// JavaScript is Case-Sensitive

// JavaScript is case-sensitive. That means in JavaScript, the lowercase and uppercase letters are treated as different values. For example,

const ag = "a";
const bg = "A";
console.log(ag === bg); // false

// In JavaScript, a and A are treated as different values.

// JavaScript Multiline Strings

// To use a multiline string, you can either use the + operator or the \ operator. For example,

// using the + operator
const message1 =
    "This is a long message " +
    "that spans across multiple lines" +
    "in the code.";

// using the \ operator
const message2 =
    "This is a long message \
that spans across multiple lines \
in the code.";
console.log("This \
is \
a multi line string");

// JavaScript String Length

// To find the length of a string, you can use built-in length property. For example,

const ap = "hello";
console.log(ap.length); // 5

// JavaScript String Objects

// You can also create strings using the new keyword. For example,

const a1 = "hello";
const b1 = new String("hello");

console.log(a1); // "hello"
console.log(b1); // "hello"

console.log(typeof a1); // "string"
console.log(typeof b1); // "object"

// Note: It is recommended to avoid using string objects. Using string objects slows down the program.


// Javascript String Concatination - 
// String concatenation means joing two or more stings together. Ths can be done by using '+' operator or by using concat(). For example,

// Using '+' operator - 
let str = "my name ";
let str2 = "is lalu";
console.log(str + str2);

// Using concat() method -
const str3 = "Hello";
const result2 = str3.concat(" World");
console.log(result2); // Output: Hello World


// String extraction using substr() method -

// What is a substring() method? 
// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring. The substring() method extracts characters from start to end (exclusive). The substring() method does not change the original string. For example,

let original = "Hello my name is Lalu and I am learning Javascript";

console.log(original.substring(6, 21));
// This function will cut from the starting index to the ending index. Ending index should be n-1 and starting should be n+1.

