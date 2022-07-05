import React from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoSearch.css';




function TodoSearch(){

    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const onSearchValueChange=(event)=>{
        setSearchValue(event.target.value);
    }
    return(
        <input 
            placeholder="Buscar..." 
            value={searchValue}
            onChange={onSearchValueChange}/>
        );
}

export { TodoSearch};