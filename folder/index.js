let categories = {
    clothes: {
        dress: {
            color: "red", 
            size: "S",
            price: "15$"
        },
        jeans: {
            color: "blue",
            size: "M",
            price: "27$"
        },
        shirt: {
            color: "white",
            size: "XS",
            price: "12$"
        },
        tshirt: {
            color: "black",
            size: "L",
            price: "9$"
        },
        trousers: {
            color: "brown",
            size: "XL",
            price: "17$"
        },
        skirt: {
            color: "pink",
            size: "XS",
            price: "7$"
        }
    },
    food: {
        apple: {
            variety: "golden",
            price: "0.5$"
        },
        banana: {
            variety: "America",
            price: "1.7$"
        },
        potato: {
            variety: "white",
            price: "0.5$"
        },
        tomato: {
            variety: "plum",
            price: "3.6$"
        },
        mushrooms: {
            variety: "champignon",
            price: "2.7$"
        },
        orange: {
            variety: "Spain",
            price: "3.2$"
        }
    },
    smartphones: {
        iphone: {
            model: "Iphone 11",
            color: "black",
            memory: "128Gb",
            price: "735$"
        },
        samsung: {
            model: "Samsung Galaxy S21",
            color: "violet",
            memory: "128Gb",
            price: "681$"
        },
        huawei: {
            model: "Huawei Nova 9",
            color: "blue",
            memory: "128Gb",
            price: "272$"
        },
        xiomi: {
            model: "Xiomi Redmi 12C",
            color: "green",
            memory: "128Gb",
            price: "177$"
        },
        oneplus: {
            model: "OnePlus Nord",
            color: "blue",
            memory: "128Gb",
            price: "354$"
        },
        oppo: {
            model: "OPPO A57s",
            color: "blue",
            memory: "128Gb",
            price: "245$"
        }
    },
    office: {
        pen: {
            color: "black",
            type: "ball",
            price: "0.5$"
        },
        pencil: {
            color: "black",
            type: "simple",
            price: "0.5$"
        },
        ruler: {
            color: "wood",
            type: "25cm",
            price: "2.5$"
        },
        bag: {
            color: "blue",
            type: "school",
            price: "21.7$"
        },
        rubber: { 
            color: "pink",
            type: "classic",
            price: "0.2$"
        },
        notebook: {
            color: "red",
            type: "A5 96p",
            price: "1.1$"
        }
    },
    furniture: {
        bed: {
            material: "oak",
            color: "brown",
            type: "double",
            size: "140x200x90cm",
            price: "326.9$"
        },
        chair: {
            material: "polyester, rubber tree",
            color: "white",
            type: "dinner",
            size: "43x87x52cm",
            price: "35.4$"
        },
        table: {
            material: "oak",
            color: "beige",
            type: "dining",
            size: "80x140x76cm",
            price: "136.2$"
        },
        door: {
            material: "ash",
            color: "beige",
            type: "between rooms",
            size: "70x200cm",
            price: "32.6$"
        },
        wardrobe: {
            material: "oak",
            color: "white",
            type: "closet",
            size: "200x220x60cm",
            price: "463.1$"
        },
        sofa: {
            material: "polyester, wood",
            color: "grey",
            type: "double",
            size: "142x80x80cm",
            price: "272.4$"
        }
    },
    musicalInstruments: {
        piano : {
            model: "Yamaha CLP-785PE",
            color: "black",
            price: "6048$"
        },
        violin: {
            model: "Stentor 1500/A",
            color: "brown",
            price: "217.9$"
        },
        flute: {
            model: "Gemeinhardt 72SH",
            color: "silver",
            price: "572.1$"
        },
        trumpet: {
            model: "J.Michael TR-200A",
            color: "golden",
            price: "190.7$"
        },
        cello: {
            model: "Rafage XS-C050",
            color: "brown",
            price: "299.6$"
        },
        accordion: {
            model: "Weltmeister Cassotto 414",
            color: "black",
            price: "6347.7$"
        }
    }
}; 

function createDiv () {
    return document.createElement("div");
}

function createUl () {
    return document.createElement("ul");
}

function createLi () {
    return document.createElement("li");
}

function createButton () {
    return document.createElement("button");
}


let divCategories = createDiv();
// let ulCategories = createUl();
// divCategories.append(ulCategories);

let divProducts = createDiv();
let ulProducts = createUl();
divProducts.append(ulProducts);

let body = document.querySelector("body");
body.append(divCategories);

let arr = [];
function generateContent(obj) {
    let ul = createUl();
    for(let key in obj) {
        let li = createLi();
        li.innerText = key;
        ul.append(li);
        arr.push(ul);
        if(typeof obj[key] === "object") {
            generateContent(obj[key]);
        }
    }
    return ul;
}

// generateContent(categories);
// divCategories.append(arr.forEach(element => {return element}));

divCategories.append(generateContent(categories))
