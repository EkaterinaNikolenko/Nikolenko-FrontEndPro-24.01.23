import { useState, useRef } from 'react';
import './App.css';
// import counter from './counter/counter.jsx';
// import getWinner from './getWinner/getWinner.jsx';
import Result from './Result';
import Emoji from './Emoji';

function App() {
  let emoji = [
    {
      id: 1,
      emojiCode: '129315',
      counter: 0
    }, 
    {
      id: 2,
      emojiCode: '128536',
      counter: 0
    },
    {
      id: 3,
      emojiCode: '128525',
      counter: 0
    },
    {
      id: 4,
      emojiCode: '128523',
      counter: 0
    },
    {
      id: 5,
      emojiCode: '128519',
      counter: 0
    },
    {
      id: 6,
      emojiCode: '128520',
      counter: 0
    },
    {
      id: 7,
      emojiCode: '129321',
      counter: 0
    },
    {
      id: 8,
      emojiCode: '129326',
      counter: 0
    },
    {
      id: 9,
      emojiCode: '128561',
      counter: 0
    },
    {
      id: 10,
      emojiCode: '128545',
      counter: 0
    }
  ];
  const [number, setNumber] = useState(emoji);
  const counterHandler = (id) => {
    setNumber(
      number.map((item) =>
        item.id === id ? { ...item, counter: item.counter + 1 } : item
      )
    );
  };

  const [max, setMax] = useState(0);
  const [count, setCount] = useState(0);
  const [winners, setWinners] = useState([]);

  function getWinner() {
    for(let item of number) {
      if(item.counter > max) {
        // console.log(max);
        setMax(item.counter);
      } 
    }
    for(let item of number) {
      console.log(max);
      if(item.counter === max) {
          setWinners(oldArray => [...oldArray, item]);
          // setWinners(...winners, item);
          setCount(a => a + 1)
      }
    }
    console.log(max, count, winners)
  }

  // const [number, setNumber] = useState(0);
  // const count = useRef(0);
  // const clickCount = () => {
  //   count.current = number + 1;
  // }

  return (
    <div className="App">
      <Emoji emoji={emoji} number={number} counterHandler={counterHandler} />
      <button id="winner" onClick={() => {
        // setWinners([]);
        getWinner();
      }}>Show results</button>
      <Result winners={winners} max={max} count={count}/>
      {/* {number.map(({id, emojiCode, counter}) => {
          return (
            <div key={id}>
              <button className="emoji" onClick={() => counterHandler(id)}>{String.fromCodePoint(emojiCode)}</button>
              <span>{counter}</span>
            </div>
          );
      })} */}
      {/* {emoji.map(({id, emojiCode, counter}) => {
          return (
            <div key={id}>
              <button className="emoji" onClick={clickCount}>{String.fromCodePoint(emojiCode)}</button>
              <span ref={count}>{count}</span>
            </div>
          );
      })} */}
      {/* <button id="winner" onClick={() => getWinner(number)}>Show results</button>
      <Result max={max} count={count} winners={winners}/> */}
      {/* <div id="res"></div> */}
    </div>
  );
}

export default App;
