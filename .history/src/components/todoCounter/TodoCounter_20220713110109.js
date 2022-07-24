import React from 'react';
import './TodoCounter.css';

function TodoCounter(props){
    //const {completedTodos, totalTodos} = React.useContext(TodoContext);

    return (
        <div className='title'>
            <h1>TODOs Andrea</h1>
            <h2 className='TodoCounter'>Has completado {props.completedTodos} de {props.totalTodos} TODOs</h2>
        </div>
    );
}

export { TodoCounter };