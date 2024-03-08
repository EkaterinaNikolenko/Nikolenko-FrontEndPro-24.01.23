let elements = prompt("Enter the elements");
let arr = elements.split(', ');

//     first version

// for(let j = 0; j < arr.length; j++){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > arr[i + 1]){
//             let element = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = element;
//         }
//         if(arr[i] < arr[i - 1]){
//             let element = arr[i];
//             arr[i] = arr[i - 1];
//             arr[i - 1] = element;
//         }
//     }
// }

//     second version

arr.sort();
console.log(arr);

arr.splice(2, 3);
console.log(arr);