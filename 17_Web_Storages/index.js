//1:1
const person = [
  {
    firstName: "John",
    lastName: "Doe",
    country: "United States",
    city: "Denver",
  },
];

const stringify = JSON.stringify(person);
console.log(stringify);
localStorage.setItem("person", stringify);

//2:1
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 23,
  skills: ["JavaScript", "TypeScript", "React"],
  country: "United States",
};

const studentStringify = JSON.stringify(student);
localStorage.setItem("student", studentStringify);
