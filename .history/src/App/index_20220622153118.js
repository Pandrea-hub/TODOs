import './App.css';
import { AppUI } from './AppUI';
import React, {useState} from 'react';
import {useEffect} from 'react';

/* 
const defaultTodos = [
  {text: 'Cortar cebolla',completed: false},
  {text: 'Ir al gym',completed: false},
  {text: 'Terminar aplicación',completed: false},
  {text: 'Ir al psicologo', completed:true},
  {text: 'Hacer compras', completed:true},
]
*/


function useLocalStorage(itemName, initialValue){
  const [loading, setLoading]= useState(true);
  const [error, setError]= useState(false);

  const [item, setItem] = useState(initialValue);

  useEffect(()=>{
    setTimeout(()=>{
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      }catch(error){
        setError(error);
      }
    },1000);
  });

  

  

  const saveItem = (newItem) => {
    try{
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName,stringifiedTodos);
      setItem(newItem);
    }catch(error){
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  }
}



function App() {
  

  const {
    item:todos,
    saveItem:setTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1',[]);
  const [searchValue, setSearchValue] = useState('');


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


  
  return (
    <AppUI
      loading={loading}
      error ={error}
      completedTodos={completedTodos}
      totalTodos = {totalTodos} 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  );
}

export default App;
