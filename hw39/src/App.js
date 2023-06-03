import './App.css';
import { useState } from 'react'
import ShowResults from './components/ShowResults';

function App() {
  const emoji = [
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
  const [emojiCounter, setEmojiCounter] = useState(emoji);
  const counterHandler = (id) => {
    setEmojiCounter(
      emojiCounter.map((item) =>
        item.id === id ? { ...item, counter: item.counter + 1 } : item
      )
    );
  };

  const [max, setMax] = useState(0);
  const [show, setShow] = useState(false);
  const result = () => {
    for(let item of emojiCounter) {
      if(item.counter > max) {
        setMax(item.counter);
        console.log(max)
      }
    }
    setShow(true);
  }
  return (
    <div className="App">
      {emojiCounter.map(({id, emojiCode, counter}) => {
          return (
            <div key={id}>
              <button className="emoji" 
              onClick={() => {
                setShow(false);
                counterHandler(id);
              }}>{String.fromCodePoint(emojiCode)}</button>
              <span>{counter}</span>
            </div>
          );
      })}
      <button onClick={result} id="winner">Show Result</button>
      <ShowResults show={show} max={max} emoji={emojiCounter} />
    </div>
  );
}

export default App;
