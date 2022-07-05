import React from 'react';
import './CreateTodoButton.css';


function CreateTodoButton(){

    const onClickButton = (msg) =>{
        alert(msg);
    };

    return(
        <button
        onClick={onClickButton("Aca se mostrara un modal")}
        >
            Agregar
        </button>
    );
}

export {CreateTodoButton};