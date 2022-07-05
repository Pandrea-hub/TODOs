import React from "react";

import {TodoContext} from '../../TodoContext';

function TodoForm(){

    const [newTodoValue, setNewTodoValue]= React.useState('');

    const {
        addTodos,
    } = React.useContext(TodoContext);

    const onCancel= () =>{
        //TODO
    };

    const onSubmit= (event)=>{
        event.preventDefault();
        addTodos(newTodoValue);
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

            <div>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cerrar
                </button>

                <button 
                    type="submit"
                >
                    Añadir TODO
                </button>


            </div>

        </form>
    );
}

export {TodoForm};