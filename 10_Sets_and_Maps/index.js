/* LEVEL 1 */
//1
let emptySet = new Set();
//2
let set = new Set();
for (let i = 0; i <= 10; i++) {
  set.add(i);
}
console.log(set);
//3
set.delete(1);
console.log(set);
//4
set.clear();
console.log(set);
//5
const tech = ["AMD", "COPILOT", "MICROSOFT", "JETBRAINS", "FACEBOOK"];
let newSet = new Set(tech);
newSet.forEach((i) => console.log(i));
//6
let countryMap = new Map();
for (const country of countryMap) {
  countryMap.set(country, country.length);
}
/* LEVEL 2 */
const a = [0, 1, 2, 3, 4];
const b = [5, 6, 7, 8, 9];
//1
const c = [...a, ...b];
let aUnionB = new Set(c);
//2
let A = new Set(a);
let B = new Set(b);
let d = a.filter((num) => B.has(num));
let e = new Set(d);

//3
let difference = a.filter((i) => !B.has(i));
let aDiffB = new Set(difference);
aDiffB.forEach((i) => console.log(i));
