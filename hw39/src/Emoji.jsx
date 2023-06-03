import React, {useRef, useState} from 'react';

function Emoji({emoji, number, counterHandler}) {
    // const [number, setNumber] = useState(emoji);
    // const counterHandler = (id) => {
    //   setNumber(
    //     number.map((item) =>
    //       item.id === id ? { ...item, counter: item.counter + 1 } : item
    //     )
    //   );
    // };

  return (
    <div>{number.map(({id, emojiCode, counter}) => {
        return (
          <div key={id}>
            <button className="emoji" onClick={() => counterHandler(id)}>{String.fromCodePoint(emojiCode)}</button>
            <span>{counter}</span>
          </div>
        );
    })}</div>
  )
}

export default Emoji;