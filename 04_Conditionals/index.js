/** Exercises: Level 1 **/

//Get user input using prompt(“Enter your age:”).
//If user is 18 or older , give feedback:
//'You are old enough to drive'
//but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

/* SOLUTION
let age = prompt("Enter your age: ");
if (age >= 18) {
  console.log("You're old enough to drive.");
} else {
  if (age < 18) {
    console.log(
      `You are not old enough to drive. In ${18 - age} years you will be.`
    );
  }
}
*/

//Compare the values of myAge and yourAge using if … else.
//Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

/* SOLUTION
myAge = 24;
yourAge = prompt("Enter your age: ");
if (yourAge < myAge) {
  console.log("I'm older than you.");
} else {
  console.log(`You're older than me by ${yourAge - myAge} years.`);
}
*/

//If a is greater than b return 'a is greater than b' else 'a is less than b' using if else and the ternary operator.
let a = 4;
let b = 3;

if (a > b) {
  console.log("A is greater than B.");
} else {
  console.log("B is not greater than A.");
}

a > b
  ? console.log("A is greater than B.")
  : console.log("B is not greater than A.");

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
/* SOLUTION
const number = prompt("Enter a number: ");
if (number % 2 == 0) {
  console.log("Number is even.");
} else {
  console.log("Number is odd.");
}
*/

/** Exercises: Level 2 **/

/* Write a code which can give grades to students according to theirs scores */
/* SOLUTION
let grade = prompt("Enter percentage");
let letter;
if (grade >= 90) {
  letter = "A";
} else if (grade >= 80) {
  letter = "B";
} else if (grade >= 70) {
  letter = "C";
} else if (grade >= 60) {
  letter = "D";
} else if (grade >= 50) {
  letter = "F";
}
console.log(letter);
*/

/*
    Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
        September, October or November, the season is Autumn.
        December, January or February, the season is Winter.
        March, April or May, the season is Spring
        June, July or August, the season is Summer
        */

/*
let month = prompt("Enter a month to check what season it's in.");
switch (month) {
    case "september":
    case "october":
    case "november":
        console.log("The season is Autumn");
        break;
    case "december":
    case "january":
    case "febuary":
        console.log("The season is Winter");
        break;
    case "march":
    case "april":
    case "may":
        console.log("The season is Spring");
        break;
    case "june":
    case "july":
    case "august":
        console.log("The season is Summer");
        break;
    default:
        console.log("Please enter a valid month.")
}
 */

//Check if a day is weekend day or a working day. Your script will take day as an input.
/*
let weekDay = prompt(
  "Enter a day to see if it's a weekday or apart of the weekend."
);
if (weekDay == "saturday" || weekDay == "sunday") {
  console.log(`${weekDay} is apart of the weekend.`);
} else if (
  weekDay == "monday" ||
  weekDay == "tuesday" ||
  weekDay == "wednesday" ||
  weekDay == "thursday" ||
  weekDay == "friday"
) {
  console.log(`${weekDay} is a working day.`);
} else {
  console.log("Please enter a valid day.");
}
*/

/** Exercises: Level 3 **/

//Write a program which tells the number of days in a month.
/*
let month = prompt("Enter a month");
if (month == "january") {
  console.log("January has 31 Days.");
} else if (month == "february") {
  console.log("February has 28 Days.");
} else {
    console.log("Please enter a valid month.")
}
*/

//Write a program which tells the number of days in a month, now consider leap year.
/*
let month = prompt("Enter a month to check how many days it contains.");
switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${month} is 31 days long.`);
    break;
  case "april":
  case "june":
  case "september":
    console.log(`${month} is 30 days long.`);
    break;
  case "february":
    console.log(`${month} is 28 days long.`);
    break;
  default:
    console.log("Please enter a valid month.");
}
*/
