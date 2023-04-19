function getWinner() {
    document.getElementById("res").innerText = "";
    let emoji = ['129315', '128536', '128525', '128523', '128519', '128520', '129321', '129326', '128561', '128545'];
    let spanValues = document.querySelectorAll(".counter");
    let max = 0;
    let counter = 0;
    let winners = [];
    for(let i = 0; i < spanValues.length; i++) {
        if(+spanValues[i].innerText >= max){
            max = +spanValues[i].innerText;
            counter++;
        } 
    }
    for(let i = 0; i < spanValues.length; i++) {
        if(+spanValues[i].innerText == max){
            winners.push(i);
        }
    }
    if(max == 0) document.getElementById("res").innerText = `No winner`;
    else if(counter == 10) document.getElementById("res").innerText = `Draw`;
    else if(winners.length == 1){
        document.getElementById("res").innerText = `The winner is ${String.fromCodePoint(emoji[winners[0]])}!!!`;
    } else {
        document.getElementById("res").innerText = `The winners are `;
        for(let i = 0; i < emoji.length; i++) {
            for(let j = 0; j < winners.length; j++){
                if(i == winners[j]) {
                    if(j != winners.length - 1) {
                        document.getElementById("res").innerText += `${String.fromCodePoint(emoji[i])}, `; 
                    } else {
                        document.getElementById("res").innerText += `${String.fromCodePoint(emoji[i])}!!!`; 
                    }
                }
            }
        }
    }

}

export default getWinner;