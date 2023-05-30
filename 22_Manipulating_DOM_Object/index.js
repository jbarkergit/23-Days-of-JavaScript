document.body.style.height = "300vh";

//1:1
let section = document.createElement("section");
const sS = section.style;
sS.display = "grid";
sS.gridTemplateColumns = "repeat(6, 1fr)";
sS.gridTemplateRows = "repeat(20, 1fr)";
sS.gap = "20px";
sS.placeItems = "center";
sS.maxWidth = "1800px";
sS.height = "100vh";
sS.padding = "2.5% 0";
document.body.appendChild(section);
section.setAttribute("id", "section");

for (let i = 0; i <= 101; i++) {
  let element = document.createElement("div");
  element.setAttribute("class", "elementClass");

  element.textContent = i;
  element.style.display = "flex";
  element.style.justifyContent = "center";
  element.style.alignItems = "center";
  element.style.width = "100%";
  element.style.height = "150%";

  if (isPrime(i) === true) {
    // Pass i into isPrime func, check for truthy return
    element.style.backgroundColor = "red";
  } else if (i % 2 === 0) {
    element.style.backgroundColor = "green";
  } else {
    if (i % 2 === 1) {
      element.style.backgroundColor = "yellow";
    }
  }
  document.getElementById("section").appendChild(element);
}

function isPrime(number) {
  if (number <= 1) return false; // Number < 1 cannot be a prime
  for (let j = 2; j < number; j++) {
    // Standard loop
    if (number % j === 0) {
      // Check if the number divisible by j
      return false;
    }
  }
  return true;
}
