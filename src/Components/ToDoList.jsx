import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, onToggleTaskCompletion, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <ToDoItem
          key={index}
          task={task}
          onToggle={() => onToggleTaskCompletion(index)}
          onDelete={() => onDeleteTask(index)}
        />
      ))}
    </ul>
  );
};

export default ToDoList;