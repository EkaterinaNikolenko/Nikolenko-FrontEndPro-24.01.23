class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get info() {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
}

class Car{
    constructor(brand, model, year, numberplate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.numberplate = numberplate;
    }

    owner(Person) {
        if(Person.age >= 18) {
            this.owner = Person;
        } else {
            console.log(Person.name + ", you can't drive car! You are under 18!");
            this.owner = "Car has not owner";
        }
    }

    info() {
        if(typeof this.owner === "object") {
            this.owner.info
            console.log(`Car: Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Numberplate: ${this.numberplate}`);
        } else {
            console.log(`(has not owner) Car: Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Numberplate: ${this.numberplate}`);
        }
        
    }
}

const tom = new Person("Tom", 18);
const kim = new Person("Kim", 15);
const ted = new Person("Ted", 37);

tom.info;
kim.info;
ted.info;
console.log("");

const mercedes = new Car("Mercedes-Benz", "C-Class", 2015, "AA 1234 AK");
const volksvagen = new Car("Volkswagen", "Passat Alltrack", 2017, "BI 0101 HB");
const toyota = new Car("Toyota", "Highlander", 2016, "BH 4321 CA");


mercedes.owner(tom);
mercedes.info();
console.log("");

volksvagen.owner(kim);
volksvagen.info();
console.log("");

toyota.owner(ted);
toyota.info();
console.log("");