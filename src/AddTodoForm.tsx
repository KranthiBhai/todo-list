import React from 'react';

interface Props {
    addTodo: AddTodo;
}
export const AddTodoForm:React.FC<Props> = ({ addTodo }) => {
  return(
      <form action="">
          <input type="text" />
          <button type="submit">Add Todo</button>
      </form>
  );
};