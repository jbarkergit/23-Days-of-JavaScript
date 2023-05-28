//Level 1:1
const string =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
const salaryArr = string.match(/\d+/g);
console.log(salaryArr);
let salary = 0;
salaryArr.forEach((el) => {
  salary += Number(el);
});
console.log(salary); //19500

//1:2
const string2 =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.";

//experiment
console.log(string2.match(/\d+/g)); //[ "12", "4", "3", "1", "0", "4", "8" ]
console.log(string2.match(/-\d+/g)); //[ "-12", "-4", "-3", "-1" ]
const negativeDir = string2.match(/-\d+/g);
//experiment
console.log(string2.match(/(?:^|[^\-\d])(\d+)/g));
const positiveDir = string2.match(/(?:^|[^\-\d])(\d+)/g);
console.log(positiveDir); //[ " 0", " 4", " 8" ]
//experiment
const allNums = string2.match(/-\d+/g);
console.log(allNums);

// answers
const points = string2.match(/-[0-9][0-9]|-[0-9]|[0-9]/g);
console.log(points); //[ "-12", "-4", "-3", "-1", "0", "4", "8" ]

const sortedPoints = points.sort((a, b) => a - b);
console.log(sortedPoints); //[ "-12", "-4", "-3", "-1", "0", "4", "8" ]

const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];
console.log(distance); //20

//1:3
const pattern = /^[-|_|a-z|A-Z][1-9|a-z|A-Z|_][1-9|a-z|A-Z|_|a-z|A-Z]*?/g;
const is_valid_variable = (string) => {
  console.log(pattern.test(string));
};
is_valid_variable("first_name"); //# True
is_valid_variable("first-name"); //# False
is_valid_variable("1first_name"); //# False
is_valid_variable("firstname"); //# True

//2:1
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

function tenMostFrequentWords() {
  return words;
}

console.log(tenMostFrequentWords(paragraph));

//3:1
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
const pattern2 = /[%]|[#]|[%][#]|[@]|[$]|&|[!]|[;]/g;

function cleanText(string) {
  console.log(string.replace(pattern2, ""));
}

cleanText(sentence);
