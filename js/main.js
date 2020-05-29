/*----- constants -----*/

/*----- app's state (variables) -----*/

let count = 0;

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
let newCount = count + inputEl.value;
outcomeEl.innerHTML = newCount;
}

function decrement() {
count--
let newCount = count - inputEl.value;
outcomeEl.innerHTML = newCount;
}

function init() {
  input.defaultValue = 1;
  outcomeEl.innerHTML = count;
}