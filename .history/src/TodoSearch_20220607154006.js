import React from 'react';
import './TodoSearch.css';

function TodoSearch(){
    const onSearchValueChange=(event)=>{
        console.log(event.value);
    }
    return(
        <input 
        placeholder="Buscar..." 
        onChange={onSearchValueChange}/> 
    );
}

export { TodoSearch};