import React, { useState } from 'react';

function TodoList(props) {
    const[checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
    }
  return (
    <li className="list-item">
        <span>
            <input type="checkbox" className='li-checkbox' onChange={handleChange} />
            <span style={{textDecoration: checked? "line-through" : "none"}}>{props.item}</span>
        </span>
        <span className='icons'>
            <i className="fa-sharp fa-solid fa-trash icon-delete"
            onClick={e => {
                props.deleteListItem(props.index);
            }}></i>
        </span>
    </li>
  )
}

export default TodoList;