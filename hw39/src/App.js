import './App.css';
import counter from './counter/counter.jsx';
import getWinner from './getWinner/getWinner.jsx';

function App() {
  let i = 0;
  let j = 0;
  let emoji = ['129315', '128536', '128525', '128523', '128519', '128520', '129321', '129326', '128561', '128545'];
  let emojiLi = emoji.map(elem => {
    j++; i++;
    let res = counter(`span${i}`);
    return <div key={i}><button className="emoji" id={i} onClick={res}>{String.fromCodePoint(elem)}</button><span className="counter" id={`span${i}`}>0</span></div>;
  });
  return (
    <div className="App">
      {emojiLi}
      <button id="winner" onClick={getWinner}>Get Winner</button>
      <div id="res"></div>
    </div>
  );
}

export default App;
