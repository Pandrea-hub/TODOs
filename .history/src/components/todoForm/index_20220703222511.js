import React from "react";
import './todoform.css';

import {TodoContext} from '../../TodoContext';

function TodoForm(){
    const [newTodoValue, setNewTodoValue]= React.useState('');

    const {
        addTodos,
        setOpenModal,
        openModal
    } = React.useContext(TodoContext);

    const onCancel= () =>{
        setOpenModal(!openModal);
    };

    const onSubmit= (event)=>{
        event.preventDefault();
        addTodos(newTodoValue);
        setOpenModal(false);
    }
    
    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>...</label> 
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />

            <div className="botons">
                <button className="botonClose"
                    type="button"
                    onClick={onCancel}
                >
                    Cerrar
                </button>

                <button className="botonSubmit"
                    type="submit"
                >
                    Añadir
                </button>


            </div>

        </form>
    );
}

export {TodoForm};