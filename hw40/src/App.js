import './App.css';
import VirtualScroll from './virtualScroll/VirtualScroll';

function App() {
  const getData = (offset, limit) => {
    const data = [];
    for(let i = offset; i < limit; i++) {
        data.push(i);
    }
    return data;
  };

  return (
    <div className="App">
        <VirtualScroll 
          data={getData(0, 10000)} 
          rowHeight={25} 
          visibleRows={10}/>
    </div>
  );
}

export default App;
