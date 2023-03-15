//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "John";
let lastName = "Doe";
let country = "USA";
let city = "Oakland";
let age = 25;
let isMarried = false;
let year = 2023;

console.log(typeof firstName); //string
console.log(typeof lastName); //string
console.log(typeof country); //string
console.log(typeof city); //string
console.log(typeof age); //number
console.log(typeof isMarried); //boolean
console.log(typeof year); //number

//Check if type of '10' is equal to 10
let ten = 10;
console.log(typeof "10" == 10); //false
console.log(typeof "10" === 10); //false

//Check if parseInt('9.8') is equal to 10
console.log(typeof "10" == 10); //false
console.log(parseInt("9.8") === 10); //false

/*Boolean value is either true or false.
        Write three JavaScript statement which provide truthy value.
        Write three JavaScript statement which provide falsy value.*/
let truthy = "random";
let truthy1 = "123";
let truthy2 = "1y 365d 24h 1m";
console.log(Boolean(truthy)); //true
console.log(Boolean(truthy1)); //true
console.log(Boolean(truthy2)); //true

let falsey = null;
let falsey1 = 0;
let falsey2 = "";

console.log(Boolean(falsey)); //false
console.log(Boolean(falsey1)); //false
console.log(Boolean(falsey2)); //false

/*Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()*/

console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != "4"); //false
console.log(4 == "4"); //true
console.log(4 === "4"); //false

//Find the length of python and jargon and make a falsy comparison statement.
let p = "python";
let j = "jargon";

console.log(p.length); //6
console.log(j.length); //6

console.log(p.length != j.length); //false

/*  Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log() */
console.log(4 > 3 && 10 < 12); //true, true -- true
console.log(4 > 3 && 10 > 12); //true, false -- false
console.log(4 > 3 || 10 < 12); //true, true -- true
console.log(4 > 3 || 10 > 12); //true, false -- true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === "4")); // true, num is not of type string
//There is no 'on' in both dragon and python
let py = "python";
let dr = "dragon";
console.log(!(/on/g.test(py) === /on/g.test(dr))); //false

//Use the Date object to do the following activities
const date = new Date();
//What is the year today?
console.log(date.getFullYear());
//What is the month today as a number?
console.log(date.getMonth());
//What is the date today?
console.log(date.getDate());
//What is the day today as a number?
console.log(date.getDay());
//What is the hours now?
console.log(date.getHours());
//What is the minutes now?
console.log(date.getMinutes());
//Find out the numbers of seconds elapsed from January 1, 1970 to now.*/
console.log(date.getTime());
//getTime to seconds conversion
console.log(date.getTime() / 1000);

/** Exercises: Level 2 **/

/*Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
Enter base: 20, Enter height: 10, The area of the triangle is 100*/

/* SOLUTION
//(area = 0.5 x b x h)
let base = prompt("Enter Base: "); //prompts return string
let height = prompt("Enter height: "); //prompts return string
let area = 0.5 * parseFloat(base) * parseFloat(height); //The parseFloat() function PARSES a string argument and returns a floating point number.
*/
//console.log(area); // 100

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle
//(perimeter = a + b + c)

/* SOLUTION
let sideA = prompt("Enter side A: "); //5
let sideB = prompt("Enter side B: "); //4
let sideC = prompt("Enter side C: "); //3
let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
*/
//Enter side a: 5
//Enter side b: 4
//Enter side c: 3
//The perimeter of the triangle is 12
//console.log(perimeter); //12

//Get length and width using prompt and calculate an area of rectangle
//(area = length x width and the perimeter of rectangle
//(perimeter = 2 x (length + width))

/* SOLUTION
let length = prompt("Enter length: ");
let width = prompt("Enter width: ");
let perimeter = 2 * (parseFloat(length) + parseFloat(width));
let area = parseFloat(length) * parseFloat(width);
console.log(parimeter, area);
*/

//Get radius using prompt and calculate the area of a circle
//(area = pi x r x r)
//and circumference of a circle(c = 2 x pi x r)
//where pi = 3.14.
/* SOLUTION
console.log(Math.PI); // 3.141592653589793
console.log(Math.round(Math.PI * 100)); //we can use Math.PI instead of declaring 3.14 but need to round off floating point values
let pi = Math.round(Math.PI * 100) / 100; // 314 / 100 = 3.14 (divide by 100 to return a decimal point)
let radius = prompt("Enter radius: ");
let area = pi * parseFloat(radius) ** 2;
let circumference = 2 * pi * parseFloat(radius);
console.group(area, circumference);
*/

//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person.
/* SOLUTION
let hours = prompt("Hours: ");
let rate = prompt("Rate: ");
let pay = parseFloat(hours) * parseFloat(rate);
console.log(`Your pay for ${hours} hours with a rate of ${rate} is $${pay}.`);
*/

//If the length of your name is greater than 7 say, your name is long else say your name is short.
/* SOLUTION
let yourName = prompt("What is your name?");
//let nameLength = console.log(yourName.length);
console.log(
  yourName.length > 7
    ? console.log("Your name is long.")
    : console.log("Your name is short.")
);
*/

//Compare your first name length and your family name length and you should get this output.
let firstName1 = "John";
let lastName1 = "Doe";
let length1 = firstName1.length,
  length2 = lastName1.length;

console.log(length1 > length2 ? console.log("Longer") : console.log("Shorter"));

if (length1 > length2) {
  console.log(
    `Your first name, ${firstName}, is longer than your family name, ${lastName}, in length.`
  );
} else if (length2 > length1) {
  console.log(
    `Your family name, ${lastName}, is longer than your first name, ${firstName}, in length.`
  );
} else {
  console.log(
    `Your first name, ${firstName}, is equal to your family name, ${lastName}, in length.`
  );
}

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250;
let yourAge = 25;

//I am 225 years older than you.
console.log(
  myAge > yourAge
    ? console.log("I am 225 years older than you.")
    : console.log("I am not older than you")
);

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
/* SOLUTION
let yearBorn = prompt("When were you born?");
let yearsOld = new Date().getFullYear() - yearBorn;
console.log(
  yearsOld >= 18
    ? console.log("You're ${yearsOld} years old, you may drive.")
    : console.log("You are underage!")
);
*/

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
/* SOLUTION
let age1 = parseFloat(prompt("Enter your age: "));
let remainingYears = 100 - age;
let remainingSeconds = remainingYears * 365.25 * 24 * 60 * 60;
console.log(
  `You have lived a total of ${
    age * 365.25 * 24 * 60 * 60
  } seconds. You have ${remainingSeconds} seconds left to live before you reach 100 years of age.`
);
*/

/* Exercises: Level 3 */
//Create a human readable time format using the Date time object
//YYYY-MM-DD HH:mm
//DD-MM-YYYY HH:mm
//DD/MM/YYYY HH:mm

let theDate = new Date();
let year1 = theDate.getFullYear();
let month = theDate.getMonth();
let date1 = theDate.getDate();
let hours = theDate.getHours();
let minutes = theDate.getMinutes();

console.log(`${year1}-${month}-${date1} ${hours}:${minutes}`);
console.log(`${date1}-${month}-${year1} ${hours}:${minutes}`);
console.log(`${date1}/${month}/${year1} ${hours}:${minutes}`);
