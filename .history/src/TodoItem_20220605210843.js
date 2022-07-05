import React from 'react';
import {AiOutlineCheck} from 'react-icons/ai';

function TodoItem(props){
    return (
        <li className='TodoItem'>
            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
    
}

export {TodoItem};