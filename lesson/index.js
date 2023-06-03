let data = {
    Риба: {
      форель: {},
      лосось: {}
    },
  
    Дерево: {
      Величезні: {
        секвойя: {},
        дуб: {}
      },
      Квітучі: {
        яблуня: {},
        магнолія: {}
      }
    }
};

const divEl = document.querySelector('div');
for (let key in data) {
    let ul = document.createElement('ul');
    // let li = document.createElement('li');
    ul.innerHTML = key;
    // ul.append(li);
    let childUL = ul.cloneNode(false);
    ul.append(childUL);
    for(let el in data[key]){
        let li = document.createElement('li');
        li.innerHTML = el;
        childUL.append(li);
    }
    divEl.append(ul);
}
  