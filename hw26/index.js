let li1 = document.getElementById('one')
let li2 = document.createElement('li');
li2.innerHTML = '2';
li1.after(li2);
let li3 = document.getElementById('two')
let li4 = document.createElement('li');
li4.innerHTML= '3';
li3.before(li4);