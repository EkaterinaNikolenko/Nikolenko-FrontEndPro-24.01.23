let str = [];
for(let i = 20; i <= 30; i += 0.5){
    str.push(i);
}
console.log(str.join(' ').toString());

const dollar = 27;
for(let i = 10; i <= 100; i +=10){
    console.log(`${i} dollars = ${i * dollar} hryvnia`);
}

let num = +prompt("Enter the number");
let numSquare = [];
for(let i = 1; i <= 100; i++){
    if(i ** 2 < num){
        numSquare.push(i);
    }
}
console.log(numSquare.join(' ').toString());

let number = +prompt("Enter the number");
for(let i = 2; i <= number; i++){
    if(i == number){
        console.log('It is prime number')
        break;
    }
    if(number % i == 0){
        console.log('It is not prime number');
        break;
    }
}

let userNum = +prompt("Enter the number");
do{
    if(userNum % 3 == 0){
        userNum /= 3;
    } else{
        break;
    }
}while(userNum != 1);

if(userNum == 1){
    console.log('Yes');
} else{
    console.log('No');
}
