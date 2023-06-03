import React, {useState} from 'react'

function Result( { winners, max, count } ) {
  return (
    <div>
      {
        // max == 0 && '' || count == 10 && 'Draw' || winners.length == 1 && `The winner is ${String.fromCodePoint(winners.emojiCode)}!!!`
        // max == 0 ? '' : count == 10 ? 'Draw' : winners.length === 1 ? `The winner is ${String.fromCodePoint(winners.emojiCode)}!!!` : 'else'
        max === 0 ? '' : winners.length === 0 ? '' : `The winner is ${String.fromCodePoint(winners.emojiCode)}!!!`
      }
    </div>
  )
}

export default Result