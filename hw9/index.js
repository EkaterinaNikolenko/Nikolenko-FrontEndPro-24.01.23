let numbers = [];
let numbersToSquare = [];
for(let i = 10; i <= 20; i++){
    numbers.push(i);
    numbersToSquare.push(i ** 2);
}
console.log(`${numbers.toString(', ')}
${numbersToSquare.toString()}`);

for(let i = 1; i <= 10; i++){
    console.log(`${i} * 7 = ${i * 7}`)
}

let sum = 0;
for(let i = 1; i <= 15; i++){
    sum += i;
}
console.log(sum);

let mult = 1;
for(let i = 15; i <= 35; i++){
    mult *= i;
}
console.log(mult);

let averageSum = 0;
for(let i = 1; i <= 500; i++){
    averageSum += i;
}
let average = averageSum / 500;
console.log(average);

let evenSum = 0;
for(let i = 30; i <= 80; i++){
    if(i % 2 == 0){
        evenSum += i;
    }
}
console.log(evenSum);

let three = [];
for(let i = 100; i <= 200; i++){
    if(i % 3 == 0){
        three.push(i); 
    }
}
console.log(three.toString());

let num = +prompt("Enter the number");
let div = [];
let countDel = 0;
let sumDel = 0;
for(let i = 1; i <= num; i++){
    if(num % i == 0){
        div.push(i)
        if(i % 2 == 0){
            countDel++;
            sumDel += i;
        }
    }
}
console.log(div.toString());
console.log(countDel);
console.log(sumDel);

for(let i = 1; i <= 10; i++){
    let arr = [];
    for(let j = 1; j <= 10; j++){
        arr.push(i * j);
    }
    console.log(arr.join('\t'));
}

for(let i = 1; i <= 10; i++){
    console.log('');
    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

