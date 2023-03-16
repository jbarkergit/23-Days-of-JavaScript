/* EXCERCISE LEVEL 1 */

//1
const emptyArray = [];

//2
const fiveElArray = [1, 2, 3, 4, 5, 6];

//3
console.log(fiveElArray.length);

//4
console.log(fiveElArray[0]);
console.log(fiveElArray[2]);
console.log(fiveElArray[4]);

//5
const mixedDataTypes = [
  null,
  true,
  "string",
  13,
  { gpus: ["3060", "3070", "3080"], undefined },
];
console.log(mixedDataTypes.length);

//6
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//7
console.log(itCompanies);

//8
console.log(itCompanies.length);

//9
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[itCompanies.length - 1]);

//10
/*
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
*/
itCompanies.map((company) => console.log(company));

//11
/*
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
*/
itCompanies.map((company) => console.log(company.toUpperCase()));

//12
//Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
let sentence = itCompanies.join(", ") + " are big IT companies.";
//Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon are big IT companies.
let lastComma = sentence.lastIndexOf(",");
sentence =
  sentence.substr(0, lastComma) + " and" + sentence.substr(lastComma + 1);
console.log(sentence);
//Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.

//13
console.log(itCompanies.includes("Google"));
console.log(itCompanies.includes("AMD"));
if (itCompanies.includes("Google")) {
  console.log("Google exists in the array.");
} else {
  console.log("Google does not exist in the array.");
}

//14
let oo = [];
itCompanies.map((company) => {
  if (company.match(/o/) && company.match(/o/gi).length > 1) {
    oo.push(company);
  }
});
console.log(oo);

//15
console.log(itCompanies.sort());

//16
console.log(itCompanies.reverse());

//17
console.log(itCompanies.slice(3));

//18
console.log(itCompanies.slice(0, -3));

//19
console.log(itCompanies.slice(0, -3));

//20
console.log(itCompanies.shift());

//21
console.log(itCompanies.slice(0, 3).concat(itCompanies.slice(4)));

//22
console.log(itCompanies.pop());

//23
console.log(itCompanies.splice());

/* Level 2 */

//1
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

//2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
console.log(text.replace(/[\.,]/gi, "").split(" ").length);

//3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
let honeyAllergy = true;
if (honeyAllergy === true && shoppingCart.indexOf("Honey")) {
  console.log(
    "You have a honey allergy, we've removed all honey products from your cart."
  );
  let honeyIndex = shoppingCart.indexOf("Honey");
  console.log(honeyIndex);
  shoppingCart.splice(honeyIndex);
} else {
  null;
}
shoppingCart.sort();
console.log(shoppingCart); // [ "Coffee", "Meat", "Milk", "Tea" ]
let teaIndex = shoppingCart.indexOf("Tea");
console.log(teaIndex); // Checking for negative return
shoppingCart[teaIndex] = "Green Tea";
console.log(shoppingCart); // [ "Coffee", "Meat", "Milk", "Green Tea" ]

//4
let findCountry = countries.find((country) => country == "Ethiopia");
findCountry ? findCountry.toUpperCase() : countries.push("Ethiopia");
console.log(findCountry);

//5
let findSass = webTechs.find((tech) => tech == "Sass");
findSass ? console.log("Sass is a CSS preprocessor.") : webTechs.push("Sass");
console.log(webTechs);

//6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

/* LEVEL 3 */

//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
let agesLength = ages.length;
let min = ages[0];
let max = ages[agesLength - 1];
console.log(`Min: ${min}, Max: ${max}`);
let median = agesLength / 2;
agesLength % 2 == 0
  ? console.log(`Median: ${ages[median]}`)
  : console.log(`Middles: ${ages[median]} ${ages[median + 1]}`);
Math.trunc(ages.reduce((a, b) => a + b) / agesLength);
console.log(Math.abs(min - ages[median]) == Math.abs(max - ages[median]));
console.log(countries.slice(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));

//2
let countryMedian = Math.trunc(countries.length / 2);
console.log(countries[countryMedian]);

//3
let newCountries = [
  countries.slice(0, countryMedian),
  countries.slice(countryMedian),
];
console.log(countryMedian);
console.log(countries);
