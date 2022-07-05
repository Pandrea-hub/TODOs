import React from 'react';
import './CreateTodoButton.css';


function CreateTodoButton(){

    const onClickButton = (msg) =>{
        alert(msg);
    };

    return(
        <button
        onClick={onClickButton(msg)}
        >
            Agregar
        </button>
    );
}

export {CreateTodoButton};