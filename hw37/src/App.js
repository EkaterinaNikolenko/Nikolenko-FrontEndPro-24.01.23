import React, { useState } from 'react';
import './App.css';
import Posts from './components/Posts.jsx';
import Comments from './components/Comments.jsx';


function App() {
const [inputText, setInputText] = useState('');
const [isShown, setIsShown] = useState(false);

  return (
    <div className="App">
      <input type="text" id='input' 
        className="input-box-todo" 
        value={inputText}
        onChange={e => {
            setInputText(e.target.value);
            setIsShown(false);
        }} />
      <Posts info={inputText} setIsShown={setIsShown} />
      <Comments info={inputText} isShown={isShown} />
    </div>
  );
}

export default App;
