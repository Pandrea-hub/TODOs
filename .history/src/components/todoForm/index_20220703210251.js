import React from "react";

import {TodoContext} from '../../TodoContext';

function TodoForm(){

    const {
        saveItem,
    } = React.useContext(TodoContext);

    const onCalcel= () =>{
        //TODO
    };

    const onSubmit= ()=>{
        //TODO
    }
    return(
        <form onSubmit={onSubmit}>
            <label>...</label> 
            <textarea
                placeholder="Cortar la cebolla para el almuerzo"
            />

            <div>
                <button
                    type="button"
                    onClick={onCalcel}
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