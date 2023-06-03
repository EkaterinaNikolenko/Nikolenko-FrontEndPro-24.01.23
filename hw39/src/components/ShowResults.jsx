import React from 'react';
import './ShowResults.css';

function ShowResults({ show, max, emoji }) {
  return (
    <div id='res'>{!show? '' : 'The winner: '}{max === 0? '' : !show? '' : emoji.map(({id, emojiCode, counter}) => {
        if(counter === max) {
            return (
                <span key={id}>{String.fromCodePoint(emojiCode)}</span>
            );
        }
    })}</div>
  )
}

export default ShowResults