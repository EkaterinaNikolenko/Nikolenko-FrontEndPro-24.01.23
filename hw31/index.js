// 1
let promise = new Promise(function(resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
});
promise.then(alert); // Виведе в alert 1

// 2
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); 
}
delay(3000).then(() => alert('виконалось через 3 секунди'));

// 3
let userNum = +prompt("Введіть число: ");
function returnPromiseNumber(num) {
    return new Promise(resolve => setTimeout(() => resolve(num), 2000)); 
}
returnPromiseNumber(userNum).then((_) => alert(`Число ${_} повернулося через дві секунди`));

// 4
let arrayOfNum = [5, 4, 2, 3, 6, 7, 0, 1]
function returnPromiseMax(array){
    return new Promise(function(resolve, reject) {
        let max = array[0];
        for(let item of array){
            if(max < item){
                max = item;
            }
        }
        resolve(max);
    })
}
returnPromiseMax(arrayOfNum).then((_) => alert("Max: " + _));