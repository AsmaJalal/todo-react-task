// TodoItem.js
import React from 'react';

const TodoItem = ({ todo, index, removeTodo, toggleComplete }) => {
  return (
    <div>
      <input type="checkbox" onChange={() => toggleComplete(index)} checked={todo.completed} />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
  );
};

export default TodoItem;
