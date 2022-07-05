//import './App.css';
import React from 'react';
import { TodoCounter } from '../TodoCounter';

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
      <input placeholder="Cebolla" /> 
      <TodoList>
        {todos.map(todo =>(
          <TodoItem />
        ))}
      </TodoList>
      <CreateTodoButton />
      <button>+</button>
    </React.Fragment>
    
  );
}

export default App;
