import React from 'react';
import './CreateTodoButton.css';


function CreateTodoButton(){
    const {setOpenModal} = React.useContext(TodoContext);
    const onClickButton = (msg) =>{
        setOpenModal(true);
    };

    return(
        <button
        onClick={() => onClickButton("Aca se mostrara un modal")}
        >
            Agregar
        </button>
    );
}

export {CreateTodoButton};