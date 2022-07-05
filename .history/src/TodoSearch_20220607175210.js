import React from 'react';
import './TodoSearch.css';




function TodoSearch(){

    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange=(event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }
    return[
        <input 
        placeholder="Buscar..." 
        value={searchValue}
        onChange={onSearchValueChange}/>,
        <p>{searchValue}</p> 
    ];
}

export { TodoSearch};