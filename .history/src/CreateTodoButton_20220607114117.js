import React from 'react';
import {IoMdAddCircleOutline} from 'react-icons/io';
import './CreateTodoButton.css';


function CreateTodoButton(){
    return(
        <button
        onClick={()=> console.log('click')}
        >
            Agregar
        </button>
    );
}

export {CreateTodoButton};