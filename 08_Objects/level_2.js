const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//1
let max = 0;

for (const user of Object.keys(users)) {
  if (users[user].skills.length > max) {
    max = users[user].skills.length;
    skilledUser = Object.assign({}, users[user]);
  }
}
console.log(skilledUser.email, max);

//2:1
let totalOnline = 0;

for (const user of Object.keys(users)) {
  if (users[user].isLoggedIn === true) {
    totalOnline++;
  }
  console.log(totalOnline); //2
}

//2:2
let minPoints = 50;
let overMin = 0;
for (const user of Object.keys(users)) {
  if (users[user].points < 50) {
    overMin++;
  }
}
console.log(overMin);

//3
let findMernStackDevs = () => {
  let mern = ["MangoDB", "Express", "React", "Node"];
  let devs = 0;
  let mernStackDevs = [];

  for (const dev of Object.values(users)) {
    for (const skill of dev["skills"]) {
      if (mern.indexOf(skill) != -1) devs++;
    }
    if (devs == 4) mernStackDevs.push(dev);
  }
  return mernStackDevs;
};

findMernStackDevs().forEach((el) => {
  console.log(el);
});

//4
let originalCopy = Object.assign({}, users);
originalCopy["John"] = {};

//5
const allKeys = Object.keys(users);

//6
const values = Object.values(users);
