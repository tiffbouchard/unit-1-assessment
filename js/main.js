/*----- constants -----*/

/*----- app's state (variables) -----*/

let count;

/*----- cached element references -----*/

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let input = document.getElementById("input");
let outcomeEl = document.getElementById("count");



/*----- event listeners -----*/

plus.addEventListener("click", increment);
minus.addEventListener("click", decrement);

/*----- functions -----*/

init();

function increment() {
count = count + input.value++;
outcomeEl.innerHTML = count;
}


function decrement() {

}


function init() {
  input.defaultValue = 1;
  outcomeEl.innerHTML = input.defaultValue;
}