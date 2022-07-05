//import './App.css';
import React from 'react';

const todos = [
  {text: 'Cortar cebolla',completed: false},
  {text: 'Ir al gym',completed: false},
  {text: 'Terminar aplicación',completed: false},
]
function App() {
  return (
    <div>
      <TodoCounter />
      <h2>Has completado 2 de 3 TODOs</h2>
      <TodoSearch />
      <input placeholder="Cebolla" /> 
      <TodoList>
        {todos.map(todo =>(
          <TodoItem />
        ))}
      </TodoList>
      <CreateTodoButton />
      <button>+</button>
    </div>
    
  );
}

export default App;
