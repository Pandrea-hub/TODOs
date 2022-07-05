import React, {useState} from 'react';
import { useLocalStorage } from './useLocalStorage';


const TodoContext = React.createContext();


function TodoProvider(props){

  
  const {
    item:todos,
    saveItem:setTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1',[]);

  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;


  let searchedTodos = [];

  if(!searchValue.length>=1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }
  
  


  const completeTodos = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed=true;
    //En este caso se crea una nueva lista ya que no se puede mandar el mismo todo
    setTodos(newTodos);
  }


  const deleteTodos = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    //En este caso se crea una nueva 
    setTodos(newTodos);
  }


    return(
        <TodoContext.Provider value={{
            loading,
            error ,
            completedTodos,
            totalTodos, 
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal,
            setTodos,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}



export {TodoContext, TodoProvider};