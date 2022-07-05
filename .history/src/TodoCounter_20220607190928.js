import React from 'react';
import './TodoCounter.css';

function TodoCounter({completed, total}){
    return (
        <div className='title'>
            <h1>TODOs Andrea</h1>
            <h2 className='TodoCounter'>Has completado {completed} de {total} TODOs</h2>
        </div>
    );
}

export { TodoCounter };