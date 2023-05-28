//1:1 //1:2?
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries);

//1:3
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.group("Users");
console.log(user);
console.log(users);
console.groupEnd();

//2:1
console.assert(10 > 2 * 10, "incorrect");
//2:2
console.warn("warning");
//2:3
console.error("error");
console.log(Error());

//3:1 Check the speed difference among the following loops: while, for, for of, forEach
const names = ["Asabeneh", "Brook", "David", "John"];

console.time("while loop");
i = 0;
while (i < names.length) {
  i++;
}
console.timeEnd("while loop end");

//
console.time("for loop");
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
console.timeEnd("for loop end");

//
console.time("for of loop");
for (const name of names) {
  console.log(name);
}
console.timeEnd("for of loop end");

//
console.time("forEach loop");
names.forEach((name) => console.log(name));
console.timeEnd("forEach loop end");
