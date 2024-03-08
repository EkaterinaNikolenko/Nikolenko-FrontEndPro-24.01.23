function removeElement(arr, item){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == item){
            arr.splice(i, 1);
        }
    }
    return arr;
    
    // return arr.splice(arr.indexOf(item), 1);;
}

const array = [1, 2, 3, 4, 5, 6, 7, 5];
removeElement(array, 5);
console.log(array);