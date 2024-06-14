import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ title: '', description: '', dueDate: '' });

  useEffect(() => {
    axios
      .get(`https://task-manager-backend-b9m3.onrender.com/api/tasks/${id}`)
      .then((response) => {
        setTask(response.data);
        setUpdatedTask({
          title: response.data.title,
          description: response.data.description,
          dueDate: new Date(response.data.dueDate).toISOString().substring(0, 10)
        });
      })
      .catch((error) => console.error('Error fetching task details:', error));
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleUpdateClick = () => {
    axios
      .put(`https://task-manager-backend-b9m3.onrender.com/api/tasks/${id}`, updatedTask)
      .then((response) => {
        setTask(response.data);
        setIsEditing(false);
      })
      .catch((error) => console.error('Error updating task:', error));
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    axios
      .delete(`https://task-manager-backend-b9m3.onrender.com/api/tasks/${id}`)
      .then(() => {
        navigate('/list');
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="title"
            value={updatedTask.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            value={updatedTask.description}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="dueDate"
            value={updatedTask.dueDate}
            onChange={handleInputChange}
          />
          <button onClick={handleUpdateClick}>Update</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskDetail;
