let t = document.querySelector('tbody');
for(let i = 0; i < t.children.length; i++){
    t.children[i].children[i].style.background = 'red';
}