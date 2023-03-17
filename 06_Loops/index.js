const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

/* LEVEL 1 */

//1

for (let i = 0; i <= 10; i++) {
  //console.log(i);
}

while (i < 10) {
  i++;
  //console.log(i);
}

do {
  i++;
  //console.log(i);
} while (i < 10);

//2
//swap 0 for 10, change <= to >=, increment down with i--

//3
//console.log("Exercise 3");
let n = 10;
for (i = 0; i <= 10; i++) {
  //console.log(i);
}

//4
//console.log("Exercise 4");
var i = 1;
for (i = 1; i <= 7; i++) {
  //console.log("#".repeat(i));
}

//5
var i = 0;
for (i = 0; i <= 10; i++) {
  //console.log(`${i} x ${i} = ${i * i}`);
}

//6
var i = 0;
//console.log("i  i^2  i^3");
for (i = 0; i <= 10; i++) {
  //console.log(`${i}  ${Math.pow(i, 2)}  ${Math.pow(i, 3)}`);
}

//7
var i = 0;
for (i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    //console.log(`${i}`);
  }
}

//8
var i = 0;
for (i = 0; i <= 100; i++) {
  if (i % 2 == 1) {
    //console.log(`${i}`);
  }
}

//9
var i = 0;
for (i = 0; i <= 100; i++) {
  n = 2;
  while (n < i) {
    if (i % n == 0) {
      break;
    }
    n++;
  }
  if (n == i) {
    console.log(n);
  }
}

//10
var sum = 0,
  i = 0;
for (i = 0; i <= 100; i++) {
  sum += i;
}

//11
var i = 0,
  evens = 0,
  odds = 0;
for (i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    evens += i;
  } else {
    odds += i;
  }
}
console.log(`The sum of evens is ${evens} and the sum of odds is ${odds}.`);

//12 log challenge 11 as an array
console.log([evens, odds]);

//13 //14
let array = [];
var i = 0;

for (i = 0; i <= 5; i++) {
  randomNum = Math.trunc(Math.random() * 100);
  array.push(randomNum);
}
console.log(array);

//15
let chars = "0123456789abcdefghijklmnopqrstuvwxyz";
let randomId = [];
for (i = 0; i <= 6; i++) {
  if (i % 2 == 0) randomId.push(i);
  else randomId.push(chars[parseInt(Math.random() * 26 + 10)]);
}
console.log(randomId.join(""));

/* LEVEL 2 */

//1
let randomArray = [];
let randomChar = parseInt(Math.random() * chars.length) % 26;
for (i = 0; i <= randomChar; i++) {
  randomArray.push(chars[Math.floor(Math.random() * chars.length) - 1]);
}
console.log(randomArray.join(""));

//2
const hexChars = "123456789abcdef";
hexCode = [];
for (i = 0; i <= 6; i++) {
  hexCode.push(
    hexChars[parseInt(Math.trunc(Math.random() * hexChars.length) - 1)]
  );
}
console.log("#" + hexCode.join(""));

//3
let rgb = [];
for (const char of "123") {
  var red = parseInt(Math.random() * 255);
  var green = parseInt(Math.random() * 255);
  var blue = parseInt(Math.random() * 255);

  rgb.push(red, green, blue);
}
console.log(`rgb(${red}, ${green}, ${blue})`);

//4
//already declared

//5
let newCountries = [];
for (const country of countries) {
  newCountries.push(country.toUpperCase());
}
console.log(newCountries);

//5
let countryLength = [];
for (const country of countries) {
  countryLength.push(country.length);
}
console.log(countryLength);

//6
let countriesData = [];
for (const country of countries) {
  let i = country.length;
  let abr = country.slice(0, 3).toUpperCase();
  countriesData.push([country, abr, i]);
}
console.log(countriesData);
for (const array of countriesData) {
  console.log(array);
}

//7
let landCountries = [];
let countryWithLand;

for (const i of countries) {
  if (i.includes("land")) {
    landCountries.push(i);
    countryWithLand = false;
  }
}
if (countryWithLand) {
  console.log("All these countries are without land.");
} else {
  for (const country of landCountries) {
    console.log(landCountries);
  }
}

//8
let endsWithIA = [];
for (const country of countries) {
  if (country.endsWith("ia")) endsWithIA.push(country);
}
if (endsWithIA.length > 0) {
  for (const ia of endsWithIA) console.log(ia);
}
//9
let maxLength = 0;
let maxCountryLength;
for (const country of countries) {
  if (country.length > maxLength) {
    maxLength = country.length;
    maxCountryLength = country;
  }
}
console.log(maxCountryLength);

//10
let maxChar = 5;
let fiveLengthCountries = [];
for (country of countries) {
  if (country.length == 5) {
    fiveLengthCountries.push(country);
    console.log(fiveLengthCountries);
  }
}

//11
let length = 0;
let word;
for (const tech of webTechs) {
  if (tech.length > length) {
    word = tech;
    length = tech.length;
  }
}
console.log(word, length);

//12
let techLengthArr = [];
for (const tech of webTechs) {
  let eaTech = tech.toUpperCase();
  techLengthArr.push(eaTech, tech.length);
}
console.log(techLengthArr);

//13
let mern = ["MongoDB", "Express", "React", "Node"];
let mernAcr = [];
for (const tech of mern) {
  mernAcr.push(tech[0]);
}
console.log(mernAcr.join(""));

//14
techStack = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];

for (tech of techStack) {
  console.log(tech);
}

//15
const fruitArray = ["banana", "orange", "mango", "lemon"];
let fruitArrayReversed = [];

for (let i = fruitArray.length - 1; i >= 0; i--) {
  fruitArrayReversed.push(fruitArray[i]);
}
console.log(fruitArrayReversed);

//16
for (const tech of webTechs) {
  console.log(tech);
}

/* LEVEL 3 */

//1
let countriesCopy = [];
for (country of countries) {
  countriesCopy.push(country);
}
console.log(countriesCopy);

//2
let sortedCountries = countriesCopy.sort();
console.log(sortedCountries);

//3
console.log(webTechs.sort());
console.log(mernStack.sort());

//4
let landArr = [];
let countryLand;

for (country of countries) {
  if (country.includes("land")) {
    landArr.push(country);
  } else {
    null;
  }
}
console.log(landArr.sort());

//5
let maxNum = 0;
let largestNum;
for (const country of countries) {
  if (country.length > maxNum) {
    maxNum = country.length;
    largestNum = country;
  }
}
console.log(largestNum);

//6
//Same as 4

//7
let fourLet = [];

for (const country of countries) {
  if (country.length === 4) {
    fourLet.push(country);
  }
}

//8
//same as 7 but instead of === 4 we're using >= 2

//9
let capitalizedCountries = [];
countries.reverse();
for (country of countries) {
  country.toUpperCase;
  capitalizedCountries.push(country);
}
console.log(countries);
