"use strict";

// content taken from "chai aur code youtube channel"

// Javascript Date and Time.

// Months always syarts from 0 in JavaScript.

// Javascript Date and Time is used to obtain date and time from somewhere (data, internet etc) so, we use them. Now, we need to create a Data object to get the date -

const newDate = new Date();
console.log(newDate); // We can see the dat which is inGMT+0530 (India Standard Time) format.

// Now, let's check the data type of newDate variable;
console.log(`The data type of "${newDate}" is "${typeof newDate}"`);

// Now, let see what methods and functions we can use on Date() object -

console.log(
	" \n Converting the date obtained from 'Date() object' into string - "
);
console.log(newDate.toString());

console.log(`\nGetting just the Date with the Day - `);
console.log(newDate.toDateString());

console.log(`\nGetting the date with the time - `);
console.log(newDate.toLocaleString());

console.log(`\nGetting the day, date and time in GMT format - `);
console.log(newDate.toUTCString());

console.log(`\nGetting the hours- `);
console.log(newDate.getHours());

console.log(`\nGetting the Date in numbers - `);
console.log(newDate.getDate());

console.log(`\nGetting full year - `);
console.log(newDate.getFullYear());

console.log(`\nGetting the month - `);
console.log(newDate.getMonth());
