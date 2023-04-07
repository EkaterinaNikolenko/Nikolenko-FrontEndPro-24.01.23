const array = [1, 2, 3, [4.1, 4.2], 5, [6.1, 6.2, 6.3], 7];

function generateList(array) {
    let ul = document.createElement("ul");
    for(let item of array){
        let li = document.createElement("li");
        if (Array.isArray(item)){
            // first version 
            // let ul2 = document.createElement("ul");
            // for(let item2 of item){
            //     let li2 = document.createElement("li");
            //     li2.innerText = item2;
            //     ul2.appendChild(li2);
            // }
            // li.appendChild(ul2);
            // version with recursion
            li.appendChild(generateList(item));
        }
        else{
            li.innerText = item;
        }
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
    return ul;
}

generateList(array);