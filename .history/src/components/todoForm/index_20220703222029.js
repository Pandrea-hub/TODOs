import React from "react";


import {TodoContext} from '../../TodoContext';

function TodoForm(){
    const {setOpenModal, openModal} = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue]= React.useState('');

    const {
        addTodos,
    } = React.useContext(TodoContext);

    const onCancel= () =>{
        setOpenModal(!openModal);
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
                    Añadir
                </button>


            </div>

        </form>
    );
}

export {TodoForm};