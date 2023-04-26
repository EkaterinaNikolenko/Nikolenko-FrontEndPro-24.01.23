import './App.css';
import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if(inputText.trim() !== '') {
      setListTodo([...listTodo, inputText]);
    }
  }
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo]);
  }
  return (
    <div className="App">
      <div className="container">
      <h1 id="heading">Todo list</h1>
      <TodoInput addList={addList}/>
      <ul className='ul-todo'>
        {listTodo.map((listItem, i) => {
          return (
            <TodoList key={i} index={i} item={listItem} deleteListItem={deleteListItem} />
          )
        })}
      </ul>
      </div>
    </div>
  );
}

export default App;
