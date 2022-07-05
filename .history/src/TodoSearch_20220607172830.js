import React from 'react';
import './TodoSearch.css';


class Componente extends React.Component{
    constructor(){
        this.state ={
            patito:'Andrea'
        };
    }

    render(){
        return (
            <div onClick={() => this.setState('Viviana')}>{this.state.patito}</div>
        )
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