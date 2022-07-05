import React from 'react';
import {IoMdAddCircleOutline} from 'react-icons/io';
import './CreateTodoButton.css';


function CreateTodoButton(){
    return(
        <button>
            <IoMdAddCircleOutline />
        </button>
    );
}

export {CreateTodoButton};