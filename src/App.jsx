import React, { useState } from 'react';
import TaskItem from './TaskItem.jsx';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // BUG 1: Function not being called correctly
  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  // BUG 2: Wrong parameter being used
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // BUG 3: Filter logic is incorrect
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id === id));
  };

  // BUG 4: Logic error in calculation
  const clearCompleted = () => {
    setTasks(tasks.filter(task => task.completed));
  };

  const incompleteTasks = tasks.filter(task => !task.completed).length;

  return (
    <div className="app">
      <div className="container">
        <h1>Task Manager</h1>

        <div className="input-section">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a new task..."
            className="task-input"
          />
          {/* BUG 5: Button not triggering function */}
          <button onClick={addTask()}>Add Task</button>
        </div>

        <div className="task-stats">
          <span>Incomplete Tasks: {incompleteTasks}</span>
          <button onClick={clearCompleted} className="clear-btn">
            Clear Completed
          </button>
        </div>

        {/* BUG 6: Missing key prop */}
        <div className="task-list">
          {tasks.map(task => (
            <TaskItem
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
