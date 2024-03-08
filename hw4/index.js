let numbers = prompt("Enter numbers");
let arr = [];
arr = numbers.split(', ');

let sum = 0;
arr.forEach(
    (element) =>
    sum += Number(element)
);

let max = 0;
let min = 0;

if(arr[0] >= arr[1] && arr[0] >= arr[2]){
    max = arr[0];
}
else if(arr[1] >= arr[0] && arr[1] >= arr[2]){
    max = arr[1];
}
else{
    max = arr[2];
}

if(arr[0] <= arr[1] && arr[0] <= arr[2]){
    min = arr[0];
}
else if(arr[1] <= arr[0] && arr[1] <= arr[2]){
    min = arr[1];
}
else{
    min = arr[2];
}

alert(`first number is ${arr[0]}, last number is ${arr.at(-1)}
${arr.join(' + ')} = ${sum}
min is ${min}, max is ${max}`);

let userNum = prompt("Please enter one of the numbers which you entered before?");

alert(`It was the ${arr.indexOf(userNum) + 1} number`);