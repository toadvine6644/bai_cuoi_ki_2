import React from 'react';

const ToDoItem = ({ task, onToggle, onDelete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggle}
      />
      {task.text}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default ToDoItem;