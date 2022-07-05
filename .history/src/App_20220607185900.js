import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';


const todos = [
  {text: 'Cortar cebolla',completed: false},
  {text: 'Ir al gym',completed: false},
  {text: 'Terminar aplicación',completed: false},
  {text: 'Ir al psicologo', completed:true},
  {text: 'Hacer compras', completed:true},
]


function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}/>
      
      
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
