import './App.css';
import { AppUI } from './AppUI';
import React from 'react';
import { TodoProvider } from '../TodoContext'
import { TodoSearch } from '../components/todoSearch/TodoSearch';

/* 
const defaultTodos = [
  {text: 'Cortar cebolla',completed: false},
  {text: 'Ir al gym',completed: false},
  {text: 'Terminar aplicación',completed: false},
  {text: 'Ir al psicologo', completed:true},
  {text: 'Hacer compras', completed:true},
]
*/

function App(){
  return (
    <React.Fragment>
      <TodoHeader/>
      <TodoList />
    </React.Fragment>
  );
}

function TodoHeader(){
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
    </React.Fragment>
  );
}

function TodoList(){
  return (
    <React.Fragment>
      <TodoItem />
    </React.Fragment>
  );
}

function TodoItem(){
  return <p>Todo Item</p>;
}

function TodoCounter(){
  return <p>Todo Counter</p>;
}

function TodoSearch(){
  return <p>Todo Search</p>;
}

// function App() {
  
//   return (
//     <TodoProvider>
//       <AppUI/>
//     </TodoProvider>
//   );
// }

export default App;
