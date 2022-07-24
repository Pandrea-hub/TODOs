import React from 'react';
import './TodoCounter.css';

function TodoCounter({completedTodos, totalTodos}){
    //const {completedTodos, totalTodos} = React.useContext(TodoContext);

    return (
        <div className='title'>
            <h1>TODOs Andrea</h1>
            <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
        </div>
    );
}

export { TodoCounter };