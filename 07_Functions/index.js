/* Level 1 */

//1
let firstName = "John";
let lastName = "Doe";

function fullName() {
  console.log(firstName, lastName);
}
fullName();

//2
function fullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}
fullName("John", "Doe");

//3
function addNumbers(a, b) {
  console.log(a + b);
}
addNumbers(1, 2);

//4 area = length x width
function areaOfRectangle(length, width) {
  console.log(length * width);
}
areaOfRectangle(2, 8);

//5 perimeter= 2x(length + width)
function perimeterOfRectangle(length, width) {
  console.log(2 * (length + width));
}
perimeterOfRectangle(2, 6);

//6 volume = length x width x height
function volumeOfRectPrism(length, width, height) {
  console.log(length * width * height);
}
volumeOfRectPrism(5, 2, 10);

//7 area = π x r x r
let pi = Math.PI;
function areaOfCircle(r) {
  return pi * 2 * r;
}
console.log(areaOfCircle(3));

//8 circumference = 2πr
function circumOfCircle(i) {
  return Math.PI * 2 * i;
}
console.log(circumOfCircle(3));

//9 density = mass/volume
function densityOfSubstance(m, v) {
  return m / v;
}
densityOfSubstance(6, 3);

//10 speed = total distance covered / total amount of time
function speed(d, t) {
  return d / t;
}

//11 weight = mass x gravity
function weight(m, g) {
  return m * g;
}

//12 temp in oC converted to oF = oF = (oC x 9/5) + 32
function convertCelsiusToFahrenheit(c) {
  return c * (9 / 5) + 32;
}
console.log(convertCelsiusToFahrenheit(2));

//13 body mass index (bmi) = weight in Kg / (height x height) in m2
/* 
    The same groups apply to both men and women.
    Underweight: BMI is less than 18.5
    Normal weight: BMI is 18.5 to 24.9
    Overweight: BMI is 25 to 29.9
    Obese: BMI is 30 or more
*/

function calcBMI(w, h) {
  return w / (h * h);
}
let BMI = calcBMI(150, 2);
if (BMI < 18.5) console.log("Underweight");
else if (BMI < 24.9) console.log("Normal Weight");
else if (BMI < 29.9) {
  console.log("Overweight");
} else {
  console.log("Obese");
}

//14
function checkSeason(month) {
  let season;

  switch (month.toLowerCase()) {
    case "september":
    case "october":
    case "november":
      season = "Autumn";
      break;
    case "december":
    case "january":
    case "february":
      season = "Winter";
      break;
    case "march":
    case "april":
    case "may":
      season = "Spring";
    case "june":
    case "july":
    case "august":
      season = "Summer";
      break;
  }
  return season;
}
console.log(checkSeason("December"));

//15
function findMax(a, b, c) {
  let max = 0;
  for (const elem of arguments) {
    if (elem > max) max = elem;
  }
  return max;
}
console.log(findMax(22, 32, 42));

/* Level 2 */
//1 //2 convoluted math problems

//3
let printArray = function (arr) {
  for (const value of arr) {
    console.log(value);
  }
};

//4 08/01/2020 04:08
function showDateTime() {
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  let hour = d.getHours();
  let mins = d.getMinutes();

  date = date < 10 ? "0" + date.toString() : date;
  month = month < 10 ? "0" + month.toString() : month;
  hour = hour < 10 ? "0" + hour.toString() : hour;
  mins = mins < 10 ? "0" + mins.toString() : mins;

  let format = `${date}/${month}/${year} ${hour}:${mins}`;

  return format;
}
console.log(showDateTime());

//5
function swapValues(a, b) {
  return [b, a];
}
let c = 1;
let d = 2;
console.log(swapValues(c, d));

//6 method prohibited
let reverseArray = (arr) => {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) reversed.push(i);

  return reversed;
};
console.log(reverseArray([1, 2, 3]));

//7
let capitalizeArray = (arr) => {
  let capsLock = [];
  for (const letter of arr) {
    capsLock.push(letter.toUpperCase());
  }
  return capsLock;
};

//8
function addItem(arr, item) {
  return arr.push(item);
}

//9
let removeItem = (arr, index) => {
  arr.splice(index, 1);
  return arr;
};

//10 //11 //12
let sumOfNumbers = (...args) => {
  let sum = 0;
  for (const i of args) {
    sum += x;
  }
  return sum;
};

//13
let evensAndOdds = (num) => {
  let evens = 0,
    odds = 0;
  for (let i = 0; i < num; i++) {
    if (i % 2 == 0) {
      evens++;
    } else {
      odds++;
    }
  }
  return `The number of odds are ${odds}.\nThe number of evens are ${evens}.`;
};
console.log(evensAndOdds(100));

//14
let sumOfNumbers1 = (...args) => {
  let sum = 0;
  for (const i of args) {
    sum += i;
  }
  return sum;
};
console.log(sumOfNumbers1(1, 2, 3));

//15 //16
function randomIp() {
  let a = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  let c = parseInt(Math.random() * 255);
  let d = parseInt(Math.random() * 255);
  return `${a}.${b}.${c}.${d}`;
}
console.log(randomIp());

//17 //18
function randomHexaNumberGenerator() {
  let chars = "0123456789ABCDEF";

  let hexCode = [];
  for (let i = 0; i < 6; i++) {
    let index = Math.trunc(Math.random() * chars.length) - 1;
    hexCode.push(chars[index]);
  }
  return "#" + hexCode.join("");
}
console.log(randomHexaNumberGenerator());
