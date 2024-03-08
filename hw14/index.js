//   1

const array = ['apple', 2, 'banana', 5, '3', [11, 'smth', '2'], undefined, null, true, false, {}];
function sumNum(arr){
    let sum = 0;
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(!isNaN(arr[i]) && typeof arr[i] !== 'boolean' && arr[i] !== null){
            sum += +arr[i];
            count++;
        }
    }
    return sum / count;
}

let average = sumNum(array);
console.log(average);


//   2

console.log('');

function doMath(x, znak, y){
    switch(znak){
        case '+':
            return +x + +y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case "^":
            return x ** y;
    }
}

let data = prompt("Enter the numbers and operation (1, +, 2)").split(', ');
let result = doMath(data[0], data[1], data[2]);
console.log(result);


//   3

console.log('');

let userData = prompt('Enter the main array length, internal arrays length and their content').split(", ");

function toFillArrays(mainLength, internalLength){
    let array = [];
    let num = 2;
    for(let i = 0; i < mainLength; i++){
        array.push([]);
        for(let j = 0; j < internalLength; j++){
            array[i].push(userData[(num + j)]);
        }
        num += internalLength;
    }
    return array;
}

let dataArray = toFillArrays(+userData[0], +userData[1]);
console.log(dataArray);

//3, 4, 1, 2, 3, apple, apple, banana, 1, banana, 3, apple, 2, 1


//   4

console.log('');

function delItem(str, arr){
    for(let i = 0; i < arr.length; i++){
        let smth = str;
        for(let j = 0; j < smth.length; j++){
            str = smth.replaceAll(arr[i], '');
        }
    }

    return str;
}

let res = delItem("hello world", ['l', 'd']);
console.log(res);