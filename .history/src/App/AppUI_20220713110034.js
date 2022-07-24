import React from "react";
import { TodoContext } from "../TodoContext";
import image  from '../image/task.png';
import alert from '../image/warning.png';
import { TodoCounter } from '../components/todoCounter/TodoCounter';
import { TodoItem } from '../components/todoItem/TodoItem';
import { CreateTodoButton } from '../components/createTodoButton/CreateTodoButton';
import { TodoList } from '../components/todoList/TodoList';
import { TodoForm } from '../components/todoForm';
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
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter
                completedTodos={completedTodos}
                totalTodos= {totalTodos}
                 />
            <TodoSearch
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}/>
            <TodoList>
                {error && 
                <div className="error">
                    <h2>¡Hubo un error!</h2>
                    <img src={alert} alt="Imagen no carga"/>
                </div>}
                
                {loading && <div className="loader">
                                <div className="ball"></div>
                                <div className="ball"></div>
                                <div className="ball"></div>
                            </div>}
                {(!loading && !searchedTodos.length) && 
                <div className="notodos">
                    <h2>No hay TODOS</h2>
                    <div className="img-wrapper">
                        <img src={image} alt="Imagen de tarea"/>
                    </div>
                </div>}
    
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
                <TodoForm />
            </Modal>
        )}
        
        <CreateTodoButton/>
        </React.Fragment>
    );
}

export {AppUI};