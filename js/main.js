/*----- app's state (variables) -----*/

let count = 0;
let newCount = 0;

/*----- cached element references -----*/

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let inputEl = document.getElementById("input");
let outcomeEl = document.getElementById("count");

/*----- event listeners -----*/

plus.addEventListener("click", increment);
minus.addEventListener("click", decrement);

/*----- functions -----*/

init();

function increment() {
let input = parseInt(inputEl.value);
newCount = newCount + input;
outcomeEl.innerHTML = newCount;
if (newCount >= 0) {
  outcomeEl.style.color = "black";
  }
}

function decrement() {
let input = parseInt(inputEl.value);
newCount = newCount - input;
outcomeEl.innerHTML = newCount;
if (newCount < 0) {
  outcomeEl.style.color = "red";
  }
}

function init() {
  input.defaultValue = 1;
  outcomeEl.innerHTML = count;
}