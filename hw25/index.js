let table = document.createElement('table');
let k = 0
for(let i = 0; i < 10; i++){
    let tr = document.createElement('tr');
    table.append(tr);
    for(let j = k; j < k + 10; j++){
        let td = document.createElement('td');
        td.innerHTML = j + 1;
        tr.append(td);
    }
    k += 10;
}
document.body.append(table);