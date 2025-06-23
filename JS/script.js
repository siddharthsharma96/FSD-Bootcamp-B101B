// Selectors
// ID select
// const heading = document.getElementById("title");
// console.log(heading);
// // 1 single value

// // // Class selector
// // let message = document.getElementsByClassName("message");
// // console.log("using class", message[0]);
// // // return HTML COllection

// // // Tag Selector
// // let buttons = document.getElementsByTagName("button");
// // console.log(buttons[0]);
// // // Return HTML Collection

// // Query selector
// let title = document.querySelector("#title");
// console.log(title);
// // single value

// // // QuerySelectorAll
// // let btns = document.querySelectorAll("#title");
// // console.log(btns[0]);
// // // Nodelist

// // Read Write
// console.log(title.textContent);
// title.textContent = "Start Learning DOM";

// // Style with js

// title.style.color = "red";
// title.style.backgroundColor = "yellow";

// // to add /remove /toggle clas
// title.classList.add("learning");
// // title.classList.remove("a");
// title.classList.toggle("a");

// const image = document.querySelector("img");
// image.src = "https://codehubnexus.com/assets/logov2.ng";
// image.alt = "image is not correct";
// image.remove();
// const inputVal = document.querySelector("input");
// const message = document.querySelector(".a");
// const buttons = document.querySelector("button");

// let a = () => {
//   message.textContent = inputVal.value;
//   console.log(inputVal.value);
// };

// buttons.addEventListener("click", () => {
//   message.textContent = inputVal.value;
//   console.log(inputVal.value);
// });
// const newPara = document.createElement("p");
// newPara.textContent = "Added from DOM";
// document.body.appendChild(newPara);
let n = 10;
if (n == 11) {
  console.log("if condition works");
  console.log("result is value is 10");
} else {
  console.log("Else will work now");
}
// ternary Operator
// n==11?true:false
n == 10 ? console.log("yes it's true") : console.log("not true");

// else if
let score = 92;
if (score >= 90) {
  console.log("bike");
} else if (score >= 80) {
  console.log("ps5");
} else if (score >= 70) {
  console.log("party");
} else {
  console.log("pitayi");
}
