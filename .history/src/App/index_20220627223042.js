import './App.css';
import { AppUI } from './AppUI';
import React, {useState} from 'react';
import { TodoProvider } from '../TodoContext'

/* 
const defaultTodos = [
  {text: 'Cortar cebolla',completed: false},
  {text: 'Ir al gym',completed: false},
  {text: 'Terminar aplicación',completed: false},
  {text: 'Ir al psicologo', completed:true},
  {text: 'Hacer compras', completed:true},
]
*/






function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
