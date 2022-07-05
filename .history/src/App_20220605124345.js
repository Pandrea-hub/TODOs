//import './App.css';
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
]


function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      
      
      <TodoList>
        {todos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
    
  );
}

export default App;
