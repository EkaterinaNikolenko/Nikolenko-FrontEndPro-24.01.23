let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let min = 0;
let max = 0;
let countNegNum = 0;
let countOddNum = 0;
let countEvenNum = 0;
let sumEvenNum = 0;
let sumOddNum = 0;
let multPozNum = 1;

arr.forEach(element => {
    if(element < min){
        min = element;
    } 
    if(element > max){
        max = element;
    } 
    if(element < 0){
        countNegNum++;
    } 
    if(element % 2 != 0 && element > 0){
        countOddNum++;
        sumOddNum += element;
    } 
    if(element % 2 == 0 && element > 0){
        countEvenNum++;
        sumEvenNum += element;
    }
    if(element > 0) multPozNum *= element;
})

console.log(min, max, countNegNum, countOddNum, countEvenNum, sumEvenNum, sumOddNum, multPozNum);

arr.forEach(element => {
    if(element != max){
        arr.splice(arr.indexOf(element), 1, 0);
    } 
})

console.log(arr);