import React from 'react';

function GetWinner({ emoji }) {
    let max = 0;
    let count = 0;
    let winners = [];
    for(let item in emoji) {
        if(item.counter > max){
            max = item.counter;
            count++;
        } 
    }
    for(let item in emoji) {
        if(item.counter == max){
            winners.push(item);
        }
    }
    if(max == 0) ;
    else if(count == 10) document.getElementById("res").innerText = `Draw`;
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

export default GetWinner;