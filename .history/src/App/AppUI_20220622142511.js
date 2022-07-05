import React from "react";
import { TodoCounter } from '../components/todoCounter/TodoCounter';
import { TodoItem } from '../components/todoItem/TodoItem';
import { CreateTodoButton } from '../components/createTodoButton/CreateTodoButton';
import { TodoList } from '../components/todoList/TodoList';
import { TodoSearch } from '../components/todoSearch/TodoSearch';


function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    deleteTodos,
}){
    return (
        <React.Fragment>
        <TodoCounter
            completed={completedTodos}
            total = {totalTodos}
        />
        <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
        
        
        <TodoList>
            {loading && <p>Estamos cargando</p>}

            {searchedTodos.map(todo =>(
            <TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={()=>completeTodos(todo.text)}
                onDelete={()=>deleteTodos(todo.text)}
                />
            ))}
        </TodoList>
        <CreateTodoButton />
        </React.Fragment>
    );
}

export {AppUI};