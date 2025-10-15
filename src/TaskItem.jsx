import React from 'react';

// BUG 7: Props destructuring issue
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="task-item">
      {/* BUG 8: Wrong event handler */}
      <input
        type="checkbox"
        checked={task.completed}
        onClick={() => onToggle(task.id)}
        className="task-checkbox"
      />
      {/* BUG 9: Wrong className reference */}
      <span className={task.completed ? 'completed' : ''}>
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
