import React, { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
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

  const addTodo: AddTodo = ( text:string ) => {
    const newTodo = { text, complete:false};
    setTodos([...todos, newTodo]);
  };
  return (
    <div className="App">
     <ul>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
     </ul>
     <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
