/* LEVEL 1 */
//1
let dog = {};

//2
console.log(dog);

//3
dog["name"] = "Dogmeat";
dog["legs"] = 4;
dog["color"] = "Black and tan";
dog["age"] = 11;
dog["bark"] = "woof woof";

//4
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark);

//5
dog["breed"] = "German Shepherd";
dog["getDogInfo"] = () => {
  console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark);
};
