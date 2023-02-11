function setMath(operation){
    return function cucl(numbers){
        let arr = [];
        for(let num of arguments){
            arr.push(num);
        }
        let res = arr[0];
        switch(operation){
            case '+':
                for(let i = 1; i < arr.length; i++){
                    res += arr[i];
                }
                break;
            case '-':
                for(let i = 1; i < arr.length; i++){
                    res -= arr[i];
                }
                break;
            case '*':
                for(let i = 1; i < arr.length; i++){
                    res *= arr[i];
                }
                break;
            case '/':
                for(let i = 1; i < arr.length; i++){
                    if(arr[i] === 0){
                        arr.splice(i, 1);
                        res /= arr[i];
                        continue;
                    }
                    res /= arr[i];
                }
                break;
        }
        return `${arr.join(` ${operation} `)} = ${res}`;
    }
}

let funcWithMath = setMath('-');

let res = funcWithMath(10,2,3);
let res_1 = funcWithMath(3,1);

console.log(res);
console.log(res_1);
console.log('');

function setNumbers(numbers){
    let arr = [];
        for(let number of arguments){
            arr.push(number);
        }
    let res = arr[0];
    return function setOperation(operation){
        switch(operation){
            case '+':
                for(let i = 1; i < arr.length; i++){
                    res += arr[i];
                }
                break;
            case '-':
                for(let i = 1; i < arr.length; i++){
                    res -= arr[i];
                }
                break;
            case '*':
                for(let i = 1; i < arr.length; i++){
                    res *= arr[i];
                }
                break;
            case '/':
                for(let i = 1; i < arr.length; i++){
                    if(arr[i] === 0){
                        arr.splice(i, 1);
                        res /= arr[i];
                        continue;
                    }
                    res /= arr[i];
                }
                break;
        }
        return `${arr.join(` ${operation} `)} = ${res}`
    }
}

let whatDo = setNumbers(10,2,3);
let whatDo_1 = setNumbers(3,1);

console.log(whatDo('-'));
console.log(whatDo_1('+'));
