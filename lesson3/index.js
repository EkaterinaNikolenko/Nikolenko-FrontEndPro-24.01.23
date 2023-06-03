let myJqMethod = {
    isHaveMAthod() {
        console.log(this, 'I have this Method');
    }
}

function myJq (elOrSelector) {
    if(typeof elOrSelector == 'string') {
        elOrSelector = document.querySelector(elOrSelector);
    }
    // return Object.assign(elOrSelector, myJqMethod)
    // return elOrSelector.__proto__ = myJqMethod[key];
    for(let key in myJqMethod) {
        elOrSelector[key] = myJqMethod[key];
    }
    return elOrSelector
}

let el = myJq('.continer');
el.isHaveMAthod();
