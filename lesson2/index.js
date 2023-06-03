let pole = document.querySelector("#pole");
let buttonPlus = document.querySelector("#button1");
let buttonMinus = document.querySelector("#button2");
let screen = document.querySelector("#screen");
let span = document.createElement('span');
buttonMinus.after(span);


let i = 0;

function countPlus() {
    i += 10;
    span.innerHTML = i;
}

function countMinus() {
    i -= 10;
    span.innerHTML = i;
}

buttonPlus.addEventListener('click', countPlus);
buttonMinus.addEventListener('click', countMinus);
// button.removeEventListener('click', count);
// pole.addEventListener('click', count);


