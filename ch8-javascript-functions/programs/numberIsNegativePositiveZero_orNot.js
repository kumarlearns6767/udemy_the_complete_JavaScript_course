// Write a program in javascript to check whether a number is negative, positive or zero using functions.
"use strict";
function tocheck() {
    let num = parseInt(prompt(" Please Enter a number in Interger = "));
    // let num = -12;
    // debugger;
    if (num < 0) {
        console.log(" Your Number is Negative ");
    } else if (num > 0) {
        console.log(" Your Number is Positive ");
    } else if (num === 0) {
        console.log(" Your Number is Zero ");
    } else {
        alert(" Invalid Entry. Please Enter a number ! ");
    }
}

tocheck();