import React from 'react';
import {IoMdAddCircleOutline} from 'react-icons/io';
import './CreateTodoButton.css';


function CreateTodoButton(){

    const onClickButton = () =>{
        alert('Hola');
    };

    return(
        <button
        onClick={onClickButton}
        >
            Agregar
        </button>
    );
}

export {CreateTodoButton};