import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddTodoAction } from '../redux/actions/TodoActions';

function TodoInput() {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();
    const handleClick = () => {
        setInputText("");
        dispatch(AddTodoAction(inputText));
    }
    const handleEnterPress = (e) => {
        if(e.keyCode === 13) {
            handleClick();
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
        onClick={handleClick}>+</button>
    </div>
  )
}

export default TodoInput;