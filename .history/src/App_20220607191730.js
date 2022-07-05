import './App.css';
import React, {useState} from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';


const defaultTodos = [
  {text: 'Cortar cebolla',completed: false},
  {text: 'Ir al gym',completed: false},
  {text: 'Terminar aplicación',completed: false},
  {text: 'Ir al psicologo', completed:true},
  {text: 'Hacer compras', completed:true},
]


function App() {
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(defaultTodos);


  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >=1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

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
        {todos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
    
  );
}

export default App;
