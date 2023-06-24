"use strict";

// Variable declaration rules -
// 1) Variable names should start only with Letter or $ or _ (underscore). Anything other than that
// is not accepted.
// So var 12raj is invalid and raj12 is Valid.

// 2) Javascript is Case sensitive so myAge and myage is different.

// 3)Variable name cannot have spaces.

// 4) There is no limit to the lenght of a variable while declaration.

// 5) Reserved Keyword in Javascript Cannot be used in variable declarations.

// 6) Var is such a variable declarer who is depratiated.
var namee = "Lalit";
// syntax - var/let/const (which is variable declaration type)
// then variavle name which is name = "variale value which is Lalit";

// 7) Let is mordern replacement of Var which is suggested variable to use instead of var.
// Let should be used only if the variable's data type is expected to be changed means integer
// string or string to boolean and vice versa.
let my_power = 12;

// 8) Const is another variable declarer which does not allows to change data type of variables.
// it should be the default variable declarer until let is required.
const my_age = 23;

console.log(namee + " power is " + my_power + "kg and his age is " + my_age);

const _power__12 = 14; // more than 1 underscore can be used to declare variable and it is valid.
// let raju^%kalu = "sick"; Even special characters like % and ^ are not allowed for variable declarations.
