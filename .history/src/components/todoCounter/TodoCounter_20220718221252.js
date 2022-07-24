import React from 'react';
import './TodoCounter.css';

function TodoCounter({completedTodos, totalTodos, loading}){
    //const {completedTodos, totalTodos} = React.useContext(TodoContext);

    return (
        <div className='title'>
            <h1>TODOs Andrea</h1>
            <h2 className={`TodoCounter ${!!loading && "TodoCounter--load"}`}>Has completado {completedTodos} de {totalTodos} TODOs</h2>
        </div>
    );
}

export { TodoCounter };