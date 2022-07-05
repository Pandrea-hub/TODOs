//import './App.css';
const todos = [
  {text: 'Cortar cebolla',completed: false}
]
function App() {
  return (
    <TodoCounter />
    <h2>Has completado 2 de 3 TODOs</h2>
    <TodoSearch />
    <input placeholder="Cebolla" /> 
    <TodoList>
      <TodoItem />
    </TodoList>
    <CreateTodoButton />
  );
}

export default App;
