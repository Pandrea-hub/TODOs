import React from 'react';
import './TodoSearch.css';




function TodoSearch(props){

    //const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const onSearchValueChange=(event)=>{
        props.setSearchValue(event.target.value);
    }
    return(
        <input 
            placeholder="Buscar..." 
            value={props.searchValue}
            onChange={onSearchValueChange}/>
        );
}

export { TodoSearch};