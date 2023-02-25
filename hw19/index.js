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

    // let text = [
    //     arguments.length > 1 ? 'Hello guys' : 'Hello',
    //     ...arguments
    // ];
	// alert( `${text.join(', ')}!`)
}


seyHello('Petro');
seyHello('Petro', 'Ivan', 'Olga');

