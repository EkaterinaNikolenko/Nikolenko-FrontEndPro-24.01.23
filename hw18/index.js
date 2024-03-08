function closureFunc(num) {
    let sum = num;
    return function (num2){
        return sum += num2;
    }
}

let sum = closureFunc(0);

console.log(sum(3)); // 3
console.log(sum(5)); // 8
console.log(sum(20)); // 28