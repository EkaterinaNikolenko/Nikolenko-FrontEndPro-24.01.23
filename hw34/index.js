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

let divCategories = document.createElement("div");
let ulCategories = document.createElement("ul");
divCategories.append(ulCategories);

let divProducts = document.createElement("div");
let ulProducts = document.createElement("ul");
ulProducts.className = "products";
divProducts.append(ulProducts);

let divProductsInfo = document.createElement("div");
divProductsInfo.className = "productInfo";

let divMyOrders = document.createElement("div");
divMyOrders.className = "divMyOrders";

let divMyOrdersUl = document.createElement("ul");
divMyOrdersUl.className = "myOrders";
divMyOrders.append(divMyOrdersUl);
divMyOrdersUl.style.visibility = false;

let divMyOrdersUlInfo = document.createElement("ul");
divMyOrdersUlInfo.className = "myOrderInfo"
divMyOrders.append(divMyOrdersUlInfo);


for(let key in categories){
    let li = document.createElement("li");
    li.innerText = key;
    li.className = key + "Category";
    ulCategories.append(li);

    for(let item in categories[key]){
        let li = document.createElement("li");
        li.innerText = item;
        li.className = key;
        ulProducts.append(li);
        li.hidden = true;

        let ulInfo = document.createElement("ul");
        ulInfo.className = item;

        for(let info in categories[key][item]){
            let li = document.createElement("li");
            li.innerText = info + ": " + categories[key][item][info];
            li.className = item;
            ulInfo.append(li);
        }

        let liButton = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = "Buy";
        liButton.append(button);
        ulInfo.append(liButton);

        ulInfo.hidden = true;
        divProductsInfo.append(ulInfo);

        button.addEventListener("click", () => {
            alert("Product has been purchased");

            let dateOrder = new Date();
            localStorage.setItem(`${item}Info`, JSON. stringify({ 
                "price": categories[key][item].price,
                "date": dateOrder.toLocaleString(),
                "category": key,
                "product": item
            }));

            let allUl = document.querySelectorAll(".productInfo ul");
            allUl.forEach(element => {
                if(element.hidden == false){
                    element.hidden = true
                }
            });
            
            let allLi = document.querySelectorAll(".products li");
            allLi.forEach(element => {
                if(element.hidden == false){
                    element.hidden = true
                }
            });
        })

        li.addEventListener("click", () => {
            let allUl = document.querySelectorAll(".productInfo ul");
            allUl.forEach(element => {
                if(element.hidden == false){
                    element.hidden = true
                }
            });

            let ulWIthClass = document.querySelector("." + item);
            ulWIthClass.hidden = false;
        });
    }

    li.addEventListener("click", () => {
        let allUl = document.querySelectorAll(".productInfo ul");
        allUl.forEach(element => {
            if(element.hidden == false){
                element.hidden = true
            }
        });

        let allLi = document.querySelectorAll(".products li");
        allLi.forEach(element => {
            if(element.hidden == false){
                element.hidden = true
            }
        });

        let allLiWithOneClass = document.querySelectorAll("." + key);
        allLiWithOneClass.forEach(element => {
            if(element.hidden){
                element.hidden = false;
            } else{
                element.hidden = true;
            }
            
        });
    });
}


let divLists = document.createElement("div");
divLists.className = "lists";
divLists.append(divCategories);
divLists.append(divProducts);
divLists.append(divProductsInfo);
document.body.append(divLists);

let buttonMyOrders = document.createElement("button");
buttonMyOrders.className = "myOrders";
buttonMyOrders.innerText = "My Orders"
document.body.append(buttonMyOrders);
document.body.append(divMyOrders);




buttonMyOrders.addEventListener("click", () => {
    divMyOrdersUl.innerText = "";
    divMyOrdersUlInfo.innerText = "";
    let list = document.querySelectorAll(".lists div");
    list.forEach(element => {
        element.hidden = true;
    })
    for(let i = 0; i < localStorage.length; i++) {
        let key1 = localStorage.key(i);
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        li1.className = key1 + "info";
        li2.className = key1;
        li2.hidden = true;
        let info = JSON.parse(localStorage.getItem(key1));
        for(let key in info) {
            if(key == "price" || key == "date") {
                li1.append(`${key}: ${info[key]}  `)
            } else{
                li2.append(`${key}: ${info[key]} `);
            }
            console.log(key);
        }
        let buttonDelete = document.createElement("button");
        buttonDelete.className = key1;
        buttonDelete.innerText = "Delete";
        buttonDelete.addEventListener("click", () => {
            localStorage.removeItem(`${key1}`);
            document.querySelector(`li.${key1}info`).hidden = true;
            document.querySelector(`li.${key1}`).hidden = true;
            document.querySelector(`button.${key1}`).hidden = true;
        });
        li1.addEventListener("click", () => {
            let myOrderInfo = document.querySelectorAll(".myOrderInfo li");
            myOrderInfo.forEach(element => {
                element.hidden = true;
            });
            document.querySelector(`li.${key1}`).hidden = false;
        })
        divMyOrdersUl.append(li1);
        divMyOrdersUl.append(buttonDelete);
        divMyOrdersUlInfo.append(li2);
    }
    divMyOrdersUl.style.visibility = true;
})
    

