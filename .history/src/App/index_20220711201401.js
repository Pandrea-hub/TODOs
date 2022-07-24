import './App.css';
import { AppUI } from './AppUI';
import React from 'react';
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

function App(){
  const [state, setState] = React.useState('Hola');
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>
      <TodoList>
        <TodoItem state={state} />
      </TodoList>
    </React.Fragment>
  );
}

function TodoHeader({children}){
  return (
    <header>
      {children}
    </header>
  );
}

function TodoList({children}){
  return (
    <section className='TodoList-container'>
      {children}
    </section>
  );
}

function TodoItem({state}){
  return <p>Todo Item:{state}</p>;
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
