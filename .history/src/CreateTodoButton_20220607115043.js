import React from 'react';
import './CreateTodoButton.css';


function CreateTodoButton(){

    const onClickButton = () =>{
        alert('Modal se muestra');
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