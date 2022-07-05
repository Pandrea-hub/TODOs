import React from 'react';
import './TodoCounter.css';

function TodoCounter(){
    return (
        <div className='title'>
            <h1>TODOs Andrea</h1>
            <h2 className='TodoCounter'>Has completado 2 de 3 TODOs</h2>
        </div>
    );
}

export { TodoCounter };