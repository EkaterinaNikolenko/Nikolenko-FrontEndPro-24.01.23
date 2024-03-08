let operator = prompt("Enter an operator (add, sub, mult, div)");
for(;;){
    if(operator === 'add' || operator === 'sub' || operator === 'mult' || operator === 'div'){
        break;
    }
    operator = prompt("Enter an operator (add, sub, mult, div)");
}
let numbers = prompt("Enter the numbers")
let arr = [];
arr = numbers.split(', ');
let res = +arr[0];

switch(operator){
    case 'add':
        for(let i = 1; i < arr.length; i++){
            res += +arr[i];
        }
        alert(`${arr.join(' + ')} = ${res}`);
        break;
    case 'sub':
        for(let i = 1; i < arr.length; i++){
            res -= +arr[i];
        }
        alert(`${arr.join(' - ')} = ${res}`);
        break;
    case 'mult':
        for(let i = 1; i < arr.length; i++){
            res *= arr[i];
        }
        alert(`${arr.join(' * ')} = ${res}`);
        break;
    case 'div':
        for(let i = 1; i < arr.length; i++){
            if(arr[i] != 0){
                res /= arr[i];
            }
        }
        let divArr = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] != 0){
                divArr.push(arr[i]);
            }
        }
        alert(`${divArr.join(' / ')} = ${res}`);
        break;
}