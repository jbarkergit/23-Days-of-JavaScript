//1:1
document.querySelector("p")[0];

//1:2
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");

//1:3
const paragraphs = document.querySelectorAll("p");

//1:4
paragraphs.forEach((paragraph) => {
  console.log(paragraph.textContent);
});

//1:5
p4.textContent = "Fourth Paragraph";

//1:6
p1.id = "first";
p2.className = "second";
p3.setAttribute("id", "third");
p4.setAttribute("class", "fourth");

//2:1 eg. color, background, border, font-size
paragraphs[1].style.color("red");
paragraphs[1].style.background("white");
paragraphs[1].style.border("2px solid blue");
paragraphs[1].style.fontSize("20px");

//2:2
for (let i = 0; i < paragraphs.length; i++) {
  if (i % 2 == 0) {
    paragraphs.style.color = "green";
  } else {
    paragraphs.style.color = "red";
  }
}

//2:3
document.querySelectorAll("p").forEach((element, i) => {
  if (i == 0) {
    element.textContent("paragraph");
    element.setAttribute("id", "id");
    element.setAttribute("class", "class");
  }
});
