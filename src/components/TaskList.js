import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios
      .get('https://task-manager-backend-b9m3.onrender.com/api/tasks')
      .then((response) => setTasks(response.data))
      .catch((error) => console.error('Error fetching tasks:', error));
  };

  const handleTaskClick = (task) => {
    navigate(`/task/${task._id}`);
  };

  return (
    <div>
      <h1>TaskLists:</h1>
      {tasks.map((task) => (
        <div key={task._id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
          <button onClick={() => handleTaskClick(task)}>View Details</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
