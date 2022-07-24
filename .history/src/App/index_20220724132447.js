import './App.css';
import React from 'react';
import image  from '../image/task.png';
import alert from '../image/warning.png';
import { TodoCounter } from '../components/todoCounter/TodoCounter';
import { TodoItem } from '../components/todoItem/TodoItem';
import { CreateTodoButton } from '../components/createTodoButton/CreateTodoButton';
import { TodoList } from '../components/todoList/TodoList';
import { TodoForm } from '../components/todoForm';
import { TodoSearch } from '../components/todoSearch/TodoSearch';
import { TodoHeader } from '../components/todoHeader'
import { Modal } from '../Modal';
import {useTodos} from './../components/useTodos';
import {ChangeAlert} from '../ChangeAlert';


function App() {

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
    setSearchValue,
    setOpenModal,
    addTodos,
    existTodos,
} = useTodos();
  
  return (
    <React.Fragment>
        <TodoHeader loading={loading}>
            <TodoCounter
                completedTodos={completedTodos}
                totalTodos= {totalTodos}
                
                />
            <TodoSearch
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}
                //loading={loading}
                />
        </TodoHeader>


        <TodoList 
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            totalTodos={totalTodos}
            searchValue={searchValue}
            
            onError={()=> 
            <div className="error">
                <h2>¡Hubo un error!</h2>
                <img src={alert} alt="Imagen no carga"/>
            </div>}

            onLoading={()=> 
            <div className="loader">
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
            </div>}

            onEmptyTodos={()=>
            <div className="notodos">
                <h2>No hay TODOS</h2>
                <div className="img-wrapper">
                    <img src={image} alt="Imagen de tarea"/>
                </div>
            </div>}
                    
            onEmptySearchResults={(searchText)=>
                <div className="noresult">
                    <h2>El todo "{searchText}" no existe</h2>
                    <div className="img-wrapper">
                        <img src={image} alt="Imagen de tarea"/>
                    </div>
                </div>
            }
            
            render={todo => (
                <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={()=>completeTodos(todo.text)}
                    onDelete={()=>deleteTodos(todo.text)}
                />
            )}
        />


    {openModal && (
        <Modal>
            <TodoForm addTodos={addTodos} setOpenModal={setOpenModal} openModal={openModal} existTodos={existTodos} />
        </Modal>
    )}
    
    <CreateTodoButton setOpenModal={setOpenModal}/>

    <ChangeAlert />

    </React.Fragment>
  );
}

export default App;
