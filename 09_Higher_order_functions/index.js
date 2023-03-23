/* LEVEL 1 */
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
//3
countries.forEach((c) => console.log(c));
console.log(countries);
//4
names.forEach((n) => console.log(n));
console.log(names);
//5
numbers.forEach((num) => console.log(num));
console.log(numbers);
//6
const capitalizedCountries = countries.map((country) => {
  return country.toUpperCase();
});
console.log(capitalizedCountries);
//7
const countriesLength = countries.map((c) => c.length);
console.log(countriesLength);
//8
const squaredNum = countriesLength.map((n) => n * n);
console.log(squaredNum);
//9
const uppercaseName = names.map((n) => n.toUpperCase());
console.log(uppercaseName);
//10
const prices = products.map((p) => p.price);
console.log(prices);
//11
const land = countries.filter((c) => {
  return c.toLowerCase().includes("land");
});
console.log(land);
//12
const sixCharCountries = countries.filter((c) => {
  return c.length === 6;
});
console.log(sixCharCountries);
//13
const sixOrMoreC = countries.filter((c) => {
  return c.length > 6;
});
console.log(sixOrMoreC);
//14 changed to F instead of E to ensure code is correct
eC = countries.filter((c) => {
  return c[0].toUpperCase() === "F";
});
console.log(eC);
//15
const values = prices.filter((p) => {
  return p > 0;
});
console.log(values);
//16
let getStringLists = (arr) => {
  let i = arr.filter((item) => {
    return typeof item === "string";
  });
  return i;
};
let i = getStringLists([1, "john", 3, "doe", 5, 7]);
console.log(i);
//17
const sumOfNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sumOfNums);
//18
let concatCountries = countries.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
//20
let lengthCheck = names.some((n) => n.length > 7);
//21
let everyCountryContainsLand = countries.every((c) =>
  c.toUpperCase().includes("land")
);
console.log(everyCountryContainsLand);
//23
let findSixChar = countries.find((c) => c.length === 6);
console.log(findSixChar);
//24
let firstCSixChar = countries.findIndex((c) => c.length === 6);
console.log(firstCSixChar);
//25
let indexOfNorway = countries.findIndex((c) => c === "Norway");
//26
let indexOfRussia = countries.findIndex((c) => c === "Russia");
/* LEVEL 2 */
//1
let totalPrice = products
  .filter((p) => typeof p.price != "string")
  .reduce((acc, cur) => acc + cur.price, 0);
console.log(totalPrice);
//2
let totalPrice1 = products.reduce((sum, item) => {
  return typeof item.price != "string" ? (sum += item.price) : sum;
}, 0);
console.log(totalPrice1);
//3
let categorizeCountries = (arr) => {
  return arr.filter((c) => c.endsWith("nd"));
};
//5
let getFirstTenCountries = (arr) => arr.filter((c) => arr.indexOf(c) < 10);
//6
let getLastTenCountries = (arr) =>
  arr.filter((c) => arr.indexOf(c) > arr.length - 11);
