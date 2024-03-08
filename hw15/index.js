function min(a, b){
    return a > b? a: b;
}
console.log(min(12, 14));

function pow(x, n){
    return x ** n;
}
console.log(pow(2, 3))

function checkAge(age){
    return age > 18 && age < 100? true: confirm('Батьки дозволили?');
}
console.log(checkAge(19));
