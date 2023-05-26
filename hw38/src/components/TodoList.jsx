import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RemoveTodoAction } from '../redux/actions/TodoActions';


function TodoList({ item }) {
    const[checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const handleChange = () => {
        setChecked(!checked);
    }
    const removeHandler = (t) => {
        dispatch(RemoveTodoAction(t));
    }
  return (
    <li className="list-item">
        <span>
            <input type="checkbox" className='li-checkbox' onChange={handleChange} />
            <span style={{textDecoration: checked? "line-through" : "none"}}>{item}</span>
        </span>
        <span className='icons'>
            <i className="fa-sharp fa-solid fa-trash icon-delete"
            onClick={() => removeHandler(item)}></i>
        </span>
    </li>
  )
}

export default TodoList;