function seyHello(name) {
    if(arguments.length === 1){
        alert(`Hello, ${arguments[0]}!`)
    } else{
        let people = [];
        for(let person of arguments){
            people.push(person);
        }
        alert(`Hello guys, ${people.join(', ')}!`)
    }
}

seyHello('Petro');
seyHello('Petro', 'Ivan', 'Olga');