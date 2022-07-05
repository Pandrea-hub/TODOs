import React from 'react';
import './TodoSearch.css';


class Componente extends React.Component{
    constructor(){
        this.state ={
            patito:'Andrea'
        };
    }
} 


function TodoSearch(){

    const estado = React.useState();

    const onSearchValueChange=(event)=>{
        console.log(event.target.value);
    }
    return(
        <input 
        placeholder="Buscar..." 
        onChange={onSearchValueChange}/> 
    );
}

export { TodoSearch};