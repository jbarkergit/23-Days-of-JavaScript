//level 1
const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

//1 //2 //3
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants,
  [fin, est, sw, den, nor] = countries,
  { width: w, height: h, area: a, perimeter: p } = rectangle;

const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

//Level 2: 1
for (const { name, scores, skills, age } of users) {
  //console.log(name, scores, skills, age);
  skills.forEach((item) => console.log(item));
}
//2
for (const { name, skills } of users) {
  if (skills.length < 2) {
    console.log(name);
  }
}

//Level 3: 1
for (const { name, capital, population, languages } of countries) {
  console.log(name, capital, population, languages);
}

//2
const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
let [name, skills, [, , jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);

//3
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

const convertArrayToObject = (array) => {
  let arrayOfObjects = [];
  for (const [name, skills, scores] of array) {
    arrayOfObjects.push({ name, skills, scores });
    return arrayOfObjects;
  }
  convertArrayToObject(students);
};

//4
const stu = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

let ski = {
  bootstrap: { skill: "Bootstrap", level: 8 },
  express: { skill: "Express", level: 9 },
  sql: { skill: "SQL", level: 8 },
  s: "SQL",
};

let studentCopy = { ...stu };
for (let i = 0; i < ski.length; i++) {
  studentCopy.skills[i].push(ski[i]);
}
console.log(studentCopy);
