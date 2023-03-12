let div = document.createElement("div");
let input = document.querySelector("input");
input.after(div);

// fisrt version
input.addEventListener("focus", () => {div.style.visibility = "visible"});
input.addEventListener("blur", () => {div.style.visibility = "hidden"});

// second version
// input.onfocus = function() {
//     div.style.visibility = "visible";
// }
// input.onblur = function() {
//     div.style.visibility = "hidden";
// }
