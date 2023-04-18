// import logo from './logo.svg';
import './App.css';
import searchID from './searchID/searchID.jsx';

function App() {
  return (
    <div className="App">
      <input type="text" id='input' onChange={searchID}></input>
      <div id="posts"></div>
      <div id="comments"></div>
    </div>
  );
}

export default App;
