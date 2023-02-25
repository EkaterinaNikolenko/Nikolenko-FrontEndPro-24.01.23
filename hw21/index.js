let users = [
    {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
]

function mapping(array, callback){
    let arr = [];
    for(let item of array){
        arr.push(callback(item));
    }
    // array.forEach((item) => arr.push(callback(item)));
    return arr;
}

function priorityStatus(item){
    return {
        ...item,
        priorityStatus: 0
    }
}

function Mult(num){
    return num * 2;
}

let numbers = [4, 6, 1, 2, 5, 3];

console.log(users);
console.log(mapping(users, priorityStatus));
console.log("");

console.log(numbers);
console.log(mapping(numbers, Mult));
console.log("");

const array1 = [1, 2, 4, 3];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );
// console.log(sumWithInitial);

function myReduce(array, callback, initialValue){
    let res;
    for(let item of array){
        res = callback(item, initialValue);
        initialValue = res;
    }
    return res;
}

function sumWithInitial(item, initialValue){
    let sum = 0;
    sum = item + initialValue;
    return sum;
}

let index = -1;
function arrayOfIndexAndValueMaxElement(item, initialValue){
    let max = item;
    index++;
    if(max > initialValue[1]){
        return [index, max];
    } else{
        return initialValue;
    }
}

console.log(myReduce(array1, sumWithInitial, 0));
console.log(myReduce(array1, arrayOfIndexAndValueMaxElement, [0, array1[0]]));
console.log("");

// let imm;
// users.pop() // mutable
// console.log(users);
// imm = arr.slice(0, -1); // immutable
// console.log(users);
// console.log(imm);


// users.push({index: 6}) // mutable
// console.log(users);
// imm = [...users, {index: 6}]; // immutable
// console.log(users);
// console.log(imm);

// users.copyWithin(0, 3, 4); // mutable
// console.log(users);
// imm = [users[3], ...users.slice(1, users.length)]; // immutable
// console.log(users);
// console.log(imm);


// users.shift() // mutable
// console.log(users);
// let item;
// [item, ...imm] = users; // immutable
// console.log(users);
// console.log(imm);

// users.unshift({index: 7}, {index: 8}); // mutable
// console.log(users);
// imm = [{index: 7}, {index: 8}, ...arr]; // immutable
// console.log(users);
// console.log(imm);

// users.reverse(); // mutable
// console.log(users);
// imm = [...arr].reverse(); // immutable
// console.log(users);
// console.log(imm);




