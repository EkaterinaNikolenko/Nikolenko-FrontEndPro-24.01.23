class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing  = stuffing;
        this.toppings = [];
    }
    static get SIZE_SMALL() {
        return {
            ingredient: "SIZE_SMALL",
            price: 50,
            calories: 20
        }
    }
    static get SIZE_BIG() {
        return {
            ingredient: "SIZE_BIG",
            price: 100,
            calories: 40
        }
    }
    static get STUFFING_CHEESE() {
        return {
            ingredient: "STUFFING_CHEESE",
            price: 10,
            calories: 20
        }
    }
    static get STUFFING_SALAD() {
        return {
            ingredient: "STUFFING_SALAD",
            price: 20,
            calories: 5
        }
    }
    static get STUFFING_POTATO() {
        return {
            ingredient: "STUFFING_POTATO",
            price: 15,
            calories: 10
        }
    }
    static get TOPPING_SAUCE() {
        return {
            ingredient: "TOPPING_SAUCE",
            price: 15,
            calories: 0
        }
    }
    static get TOPPING_MAYO() {
        return {
            ingredient: "TOPPING_MAYO",
            price: 20,
            calories: 5
        }
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    calculate() {
        const ingredientsCalories = this.toppings.reduce((total, ingredient) => total + ingredient.calories, 0);
        return this.size.calories + this.stuffing.calories + ingredientsCalories;
    }
    calculatePrice() {
        const ingredientsPrice = this.toppings.reduce((total, ingredient) => total + ingredient.price, 0);
        return this.size.price + this.stuffing.price + ingredientsPrice;
    }
    
}

// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculate());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());