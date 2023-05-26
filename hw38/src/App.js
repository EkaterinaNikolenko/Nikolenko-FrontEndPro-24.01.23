import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useSelector } from 'react-redux';


function App() {
  const Todo = useSelector(state => state.Todo);
  const { todos } = Todo;
  
  return (
    <div className="App">
      <div className="container">
      <h1 id="heading">Todo list</h1>
      <TodoInput/>
      <ul className='ul-todo'>
        {todos && todos.map((listItem, i) => {
          return (
            <TodoList key={i} item={listItem}/>
          )
        })}
      </ul>
      </div>
    </div>
  );
}

export default App;
