import React from "react";
import './todoform.css';

import {TodoContext} from '../../TodoContext';

function TodoForm(){
    const [newTodoValue, setNewTodoValue]= React.useState('');

    const {
        addTodos,
        setOpenModal,
        openModal,
        existTodos,
    } = React.useContext(TodoContext);

    const onCancel= () =>{
        setOpenModal(!openModal);
    };

    const onSubmit= (event)=>{
        event.preventDefault();
        if(existTodos(newTodoValue).length === 0){
            addTodos(newTodoValue);
            setOpenModal(false);
        }else{
            alert("El TODO esta repetido");
        }
        
    }
    
    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    }

    return(
        <form onSubmit={onSubmit}>
            <div className="description">
                <label>Agregar TODO</label> 
                <textarea
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder="Agrega un TODO"
                    required
                />
            </div>
            

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