import React from 'react';
import './TodoItem.css';
import {AiOutlineCheck} from 'react-icons/ai';
import {FaRegTrashAlt} from 'react-icons/fa';

function TodoItem(props){


    const onComplete = () => {
        alert('Ya completaste el todo'+props.text);
    };

    const onDelete = () => {
        alert('Borraste el todo '+props.text);
    };

    return (
        <li className='TodoItem'>
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--activate' }`}
             onClick={onComplete}>
                <AiOutlineCheck />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className='Icon Icon-delete' onClick={onDelete}>
               <FaRegTrashAlt /> 
            </span>
        </li>
    );
    
}

export {TodoItem};