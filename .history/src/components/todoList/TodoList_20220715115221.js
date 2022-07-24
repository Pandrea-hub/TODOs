import React from "react";
import './TodoList.css';

function TodoList(props){
    return(
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.searchedTodos?.length) && props.onEmptyTodos()}

            {props.searchedTodos.map(todo => props.render(todo))}
            <ul>
                {props.children}
            </ul>
        </section> 
        
    );
}


export {TodoList};