import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddTodoAction } from '../redux/actions/TodoActions';

function TodoInput() {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();
    const handleEnterPress = (e) => {
        if(e.keyCode === 13) {
            setInputText("");
            dispatch(AddTodoAction(inputText));
        }
    }
  return (
    <div className="input-container">
        <input 
            type="text" 
            className="input-box-todo" 
            placeholder='Enter your task'
            value={inputText}
            onChange={e => {
                setInputText(e.target.value);
            }}
            onKeyDown={handleEnterPress}
        />
        <button className='add-btn'
        onClick={() => {
            setInputText("");
            dispatch(AddTodoAction(inputText));
        }}>+</button>
    </div>
  )
}

export default TodoInput;