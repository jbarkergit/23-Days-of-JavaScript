/** START OF LEVEL ONE */

//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days of JavaScript";
//Print the string on the browser console using console.log()
console.log(challenge);

//Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(3, 7)); //substr is depreciated

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.charAt(20)); // t
console.log(challenge.slice(3, 21));

//Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script")); // true

//Split the string into an array using split() method
console.log(challenge.split(""));

//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "));

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let platforms = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(platforms.split(","));

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript", "Python"));

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15)); // S

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt("J")); // 51

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a")); // 4

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a")); // 14

/* Use indexOf to find the position of the first occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because")); // 31

// Use lastIndexOf to find the position of the last occurrence of the word because in the sentence.
console.log(sentence.lastIndexOf("because")); // 47

// Use search to find the position of the first occurrence of the word because in the sentence.
console.log(sentence.search("because")); // 31

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let trailingSpaceSentence = "    30 Days of JavaScript ";
console.log(trailingSpaceSentence.trim(" "));

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("3")); //true

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("t")); //true

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match(/a/g)); // ["a", "a", "a"]

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let phrase = "30 Days of ";
let phrase1 = "JavaScript";
console.log(phrase.concat(phrase1));

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(30));

/** END OF LEVEL ONE */
/** START OF LEVEL TWO */

// NOTE: Author should have been more explicit with the following two challenges but this course is free, so I've no right to bicker, haha.
// Using console.log() print out the following statement:
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

// Prettier extension converts this line to double quotes and I will not disable it. The single tick solution involves use of single quotes and escape chars "\"

console.log(
  `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
);

// Using console.log() print out the following quote by Mother Teresa:
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
console.log(
  `Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.`
);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof 10); // will return "number" because we're checking for the data's TYPE; therefore, we must CAST (convertion of types)
/* using the following solutions: (+, parseInt, Number(param)) */

// Set variable
num = 10;
// Convert
num = parseInt(num);
// Finally log
console.log(num);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat("9.8") === 10); // false
console.log(Math.round(parseFloat("9.8")) === 10); // true
console.log(Math.ceil(parseFloat("9.8")) === 10); // true

// Check if 'on' is found in both python and jargon
let programmingLanguage = "python",
  notProgrammingLanguage = "jargon";

console.log(
  programmingLanguage.includes("on") && notProgrammingLanguage.includes("on")
);

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let jargonCheck = "I hope this course is not full of jargon.";
console.log(jargonCheck.includes("jargon"));

// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101)); //Added Math.floor to round down, Math.round seemed to result in less random patterns

// Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * 51) + 50);

// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 256));

// Access the 'JavaScript' string characters using a random number.
let js = "JavaScript";
// By wrapping a math func with charAt we're using an integer to select a random letter in the variable
console.log(js.charAt(Math.floor(Math.random() * js.length)));

// Use console.log() and escape characters to print the following pattern.

console.log(`
    1 1 1 1 1\n
    2 1 2 4 8\n
    3 1 3 9 27\n
    4 1 4 16 64\n
    5 1 5 25 125\n
    `);

// Use substr to slice out the phrase because because because from the following sentence:
let funkySentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(funkySentence.substr(31, 23));

/** END OF LEVEL 2 */
/** START OF LEVEL 3 */

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let poeticSentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(poeticSentence.match(/love/gi));

// Use match() to count the number of all because in the following sentence: (REUSED PREVIOUS VARIABLE)
console.log(poeticSentence.match(/love/gi).length);
