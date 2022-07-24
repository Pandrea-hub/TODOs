import React from "react";
import './TodoList.css';

function TodoList(props){
    return(
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {(props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(searchedTodos)}
            {props.searchedTodos.map(todo => props.render(todo))}
            <ul>
                {props.children}
            </ul>
        </section> 
        
    );
}


export {TodoList};