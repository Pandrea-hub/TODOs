import React from 'react';
import './TodoCounter.css';
import { TodoContext } from "../../TodoContext";

function TodoCounter(){
    const {completedTodos, totalTodos} = React.useContext(TodoContext);

    return (
        <div className='title'>
            <h1>TODOs Andrea</h1>
            <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
        </div>
    );
}

export { TodoCounter };