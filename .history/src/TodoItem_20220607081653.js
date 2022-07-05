import React from 'react';
import {AiOutlineCheck} from 'react-icons/ai';
import {FaRegTrashAlt} from 'react-icons/fa';

function TodoItem(props){
    return (
        <li className='TodoItem'>
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--activate' }`}>
                <AiOutlineCheck />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className='Icon Icon-delete'>
               <FaRegTrashAlt /> 
            </span>
        </li>
    );
    
}

export {TodoItem};