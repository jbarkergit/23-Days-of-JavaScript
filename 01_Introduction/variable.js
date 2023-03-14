//Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
let aString = "string";
let aBoolean = true || false;
let aUndefined;
const aNullElement = null;
/* we should never declare var due to scoping of the immediate function body */

//Declare four variables without assigning values
let a;
let b;
let c;
let d;

//Declare four variables with assigned values
let e = 0;
let f = 1;
let g = 2;
let h = 3;

//Declare variables to store your first name, last name, marital status, country and age in multiple lines
let firstName = "John";
let lastName = "Doe";
let martialStatus = "Single";
let country = "USA";
let age = "22";

//Declare variables to store your first name, last name, marital status, country and age in a single line
let personDetails = "John",
  lastName1 = "Doe",
  martialStatus1 = "Single",
  country1 = "USA",
  age1 = "22";
/* Prettier causing line wraps */

//Declare two variables myAge and yourAge and assign them initial values and log to the browser console.
const myAge = 22;
const yourAge = 23;

console.log(myAge, yourAge);

//Additional challenges for fun, not apart of Day One of 30DaysofJavaScript
/* adding strings for fun */
console.log(
  "I am " + myAge + " years old. " + "You are " + yourAge + " years old."
);

/* now with variables */
let intro = "I am ";
let statement = "You are ";
let yearsOld = " years old. ";

console.log(intro + myAge + yearsOld + statement + yourAge + yearsOld);
