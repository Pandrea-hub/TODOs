import React from 'react';
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