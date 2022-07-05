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