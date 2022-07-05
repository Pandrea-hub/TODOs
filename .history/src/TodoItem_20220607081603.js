import React from 'react';
import {AiOutlineCheck} from 'react-icons/ai';
import {FaRegTrashAlt} from 'react-icons/fa';

function TodoItem(props){
    return (
        <li className='TodoItem'>
            <span className={`Icon Icon-check ${props.complete && 'Icon-check--activate' }`}>
                <AiOutlineCheck />
            </span>
            <p className={`TodoItem-p ${props.complete && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className='Icon Icon-delete'>
               <FaRegTrashAlt /> 
            </span>
        </li>
    );
    
}

export {TodoItem};