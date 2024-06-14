import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({
      title: '',
      description: '',
      dueDate: ''
    });
  };

  return (
    <span>
      <h1>Add New Task</h1>
    <form onSubmit={handleSubmit} className='form'>
      <label>Task title:</label>
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        required
      />
      <br/>
      <label>Task description:</label>
      <input
        type="text"
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
        required
      />
      <br/>
      <label>Due date:</label>
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        required
      />
      <br/>
      <button type="submit">Add Task</button>
    </form>
    <p>after done, move to all task page</p>
    </span>
  );
};

export default TaskForm;
