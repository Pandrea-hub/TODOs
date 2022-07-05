import React from "react";


function AppUI(){
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
            {searchedTodos.map(todo =>(
            <TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={()=>completeTodos(todo.text)}
                onDelete={()=>deleteTodos(todo.text)}
                />
            ))}
        </TodoList>
        <CreateTodoButton />
        </React.Fragment>
    );
}

export {AppUI};