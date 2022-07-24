import React from 'react';
import './TodoSearch.css';




function TodoSearch({searchValue, setSearchValue, loading}){

    const onSearchValueChange=(event)=>{
        setSearchValue(event.target.value);
    }
    return(
        <input 
            placeholder="Buscar..." 
            value={searchValue}
            onChange={onSearchValueChange}
            disabled={loading}//En caso de que este cargando lo deshabilita y en caso contrario lo habilita
            />
        );
}

export { TodoSearch};