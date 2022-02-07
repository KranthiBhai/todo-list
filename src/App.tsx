import React, { useState } from 'react';
import './App.css';
import { TodoList } from './TodoList';
import { TodoListItem } from './TodoListItem';


const initialTodos: Todo[] = [
  {
    text:"Walk the dog",
    complete: false,
  },
  {
    text: "Write app",
    complete: true,
  },
];
function App() {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo = (selectedTodo:Todo) => {
    const newTodos = todos.map((todo) => {
      if(todo === selectedTodo) {
        return {
          ...todo, complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos)
  };
  return (
    <div className="App">
     <ul>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
     </ul>
    </div>
  );
}

export default App;
