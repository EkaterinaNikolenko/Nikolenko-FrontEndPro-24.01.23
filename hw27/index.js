function mapping(obj, callback){
    if(Array.isArray(obj)){
        let array = [];
        for(let item of obj){
            array.push(callback(item))
        }
        return array;
    } else if (typeof obj === "object" && obj !== null){
        let object = {};
        for(let key in obj){
            object[key] = callback(obj[key]);
        }
        return object;
    } else{
        alert("Wrong data!")
    }
}

console.log(mapping([1, 2, 3], (num)=>{return num * 2}));

console.log(mapping(
    {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
    }, 
    (key) => {
        if(key === true){
            return key = false;
        } else{
            return key;
        }
    }
));

mapping(7, (num)=>{return num * 2});
mapping(null, (num)=>{return num * 2});

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

function filter(array, callback){
    let right = [];
    let wrong = [];
    for(let item of array){
        let res = callback(item);
        if(res === true){
            right.push(item);
        } else{
            wrong.push(item);
        }
    }
    return {right, wrong}
}

const {right, wrong} = filter(words, (word) => {return word.length > 6});
console.log(right);
console.log(wrong);