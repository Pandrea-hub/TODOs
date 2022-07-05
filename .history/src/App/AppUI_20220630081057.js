import React from "react";
import { TodoContext } from "../TodoContext";

import { TodoCounter } from '../components/todoCounter/TodoCounter';
import { TodoItem } from '../components/todoItem/TodoItem';
import { CreateTodoButton } from '../components/createTodoButton/CreateTodoButton';
import { TodoList } from '../components/todoList/TodoList';
import { TodoSearch } from '../components/todoSearch/TodoSearch';
import { Modal } from '../Modal';

function AppUI(){
    const {
        error,
        loading,
        searchedTodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {error && <p>Hubo un error</p>}
                {loading && <p>Estamos cargando</p>}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
    
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


        {openModal && (
            <Modal>
                <p> {searchedTodos[0]?.text} </p>
            </Modal>
        )};

        
        <CreateTodoButton/>
        </React.Fragment>
    );
}

export {AppUI};