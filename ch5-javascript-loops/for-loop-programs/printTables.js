// Write a program to print tables of the given number.

'use strict';

let num = 8;
let limit = 10;
let i;
let table;
for (i = 1; i <= limit; i++) {
    table = num * i;
    console.log(`${num} x ${i} = ${table}`);
}