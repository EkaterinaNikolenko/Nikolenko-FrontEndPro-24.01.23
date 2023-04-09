let popUp = document.querySelector('.popUp');
let popUpBody = document.querySelector('.popUp__body');
let openPopupButton = document.querySelector('.popUp_open');
let closePopupButtons = document.querySelectorAll('.popUp_close');
console.log(openPopupButton);

openPopupButton.addEventListener('click', createRipple);

openPopupButton.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.classList.add('active');
    popUpBody.classList.add('active');
})

closePopupButtons.forEach(button => {
    popUp.classList.remove('active');
    popUpBody.classList.remove('active');
    if(document.querySelector("span") !== null) {
        document.querySelector("span").remove();
    }
})

document.addEventListener('click', (e) => {
    if(e.target === popUpBody) {
        popUp.classList.remove('active');
        popUpBody.classList.remove('active');
        if(document.querySelector("span") !== null) {
            document.querySelector("span").remove();
        }
    }
});

function createRipple(event) {
    var ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    var max = Math.max(this.offsetWidth, this.offsetHeight);
    
    ripple.style.width = ripple.style.height = max*2 + 'px';
    
    var rect = this.getBoundingClientRect();
    
    ripple.style.left = event.clientX - rect.left - max + 'px';
    ripple.style.top = event.clientY - rect.top - max + 'px';
    
    this.appendChild(ripple);
}