import React, { useState } from 'react';
import TodoList from './ToDoList';
import './CSS/ToDoApp.css'

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !task.completed;
    if (filter === 'Complete') return task.completed;
  });

  return (
    <div>
      <h1 className='title'>#todo</h1>
      <div className='addTask'>
        <input
            className='inputTask'
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add tasks"
          />
        <button className='Add' onClick={addTask}>Add Task</button>
      </div>
      <div className='addedTask'>
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Active')}>Active</button>
        <button onClick={() => setFilter('Complete')}>Complete</button>
      </div>
      <hr />
      <TodoList
        tasks={filteredTasks}
        onToggleTaskCompletion={toggleTaskCompletion}
        onDeleteTask={deleteTask}
      />
      <div className='delContainer'> 
        <button className='delete' onClick={deleteAllTasks}>Delete All</button>
      </div>
    </div>
  );
};

export default ToDoApp;