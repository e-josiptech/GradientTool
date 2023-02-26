// const buttons = document.getElementsByTagName("button");
// console.log(buttons);
// Array.from(buttons).forEach((button, i) => {
//   button.innerText = "Autobus " + i;
//   button.classList.add("success");
//   button.onclick = () => {
//     button.style.backgroundColor = "pink";
//     alert("Autobus " + i);
//   };
//   if (button.classList.contains("auto")) {
//     button.style.fontSize = "50px";
//   }
// });

// console.log(Array.from(buttons));

// const list = document.querySelectorAll("li");

// console.log(list[4].getAttribute("price"));
// const torta = list[4];
// torta.setAttribute("price", "200ante");

// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("mouseleave", function () {
//   console.log("CLICK!!!!!");
// });

// SHOPPING LIST

// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector(".lista2");
// // var link = document.querySelector(".link");
// function inputLength() {
//   return input.value.length;
// }
// function createListElement() {
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
//   input.value = "";
// }

// button.addEventListener("click", () => {
//   if (input.value.length > 0) {
//     createListElement();
//   }
// });

// input.addEventListener("keypress", (event) => {
//   if (inputLength() > 0 && event.code === "Enter") {
//     createListElement();
//   }
// });

// GITHUB SHOPPING LIST

// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// const ul = document.querySelector("ul");
// const li = document.getElementsByTagName("li");
// const deleteButton = document.getElementsByTagName("i");
// var clearButton = document.getElementById("clear");

// function strikeThrough(e) {
//   if (e.target.tagName === "LI") {
//     e.target.classList.toggle("done");
//   }
// }

// function createDeleteButtonIcon() {
//   for (var ind = 0; ind < li.length; ind++) {
//     var createDeleteButton = document.createElement("i");
//     var createDiv = document.getElementsByClassName("div");
//     console.log(createDiv);
//     createDeleteButton.classList.add("fa", "fa-trash");
//     createDiv[ind].appendChild(createDeleteButton);
//   }
// }

// function deleteNodeOnClick(e) {
//   var trash = document.querySelectorAll("i");
//   for (var ind = 0; ind < trash.length; ind++) {
//     console.log(e);
//     this.parentNode.parentNode.remove();
//   }
// }

// function inputLength() {
//   return input.value.length;
// }

// function createListElement() {
//   var divClassWrapper = document.createElement("div");
//   divClassWrapper.classList.add("li-wrapper");

//   var li = document.createElement("li");
//   var createDiv = document.createElement("div");

//   li.appendChild(document.createTextNode(input.value));
//   divClassWrapper.appendChild(li);
//   divClassWrapper.appendChild(createDiv);
//   ul.appendChild(divClassWrapper);

//   input.value = "";
//   createDiv.classList.add("div");
//   var createDeleteButton = document.createElement("i");
//   createDeleteButton.classList.add("fa", "fa-trash");
//   createDiv.appendChild(createDeleteButton);
//   deleteParentNodeOnClick();
// }

// function addListAfterClick() {
//   if (inputLength() > 0) {
//     createListElement();
//   }
// }

// function addListAfterKeypress(event) {
//   if (inputLength() > 0 && event.keyCode === 13) {
//     createListElement();
//   }
// }

// function deleteParentNodeOnClick() {
//   for (var i = 0; i < deleteButton.length; i++) {
//     deleteButton[i].addEventListener("click", deleteNodeOnClick);
//   }
// }

// function clearList() {
//   ul.innerHTML = "";
// }

// clearButton.addEventListener("click", clearList);
// ul.addEventListener("click", strikeThrough);
// button.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress);
// createDeleteButtonIcon();
// deleteParentNodeOnClick();

// GRADDIEEENTTTTEE PROJECT

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
