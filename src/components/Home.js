import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const history = useNavigate();

  const handleShowListClick = () => {
    history('/list');
  };

  const handleAddNewListClick = () => {
    history('/form');
  };

  return (
    <div className='home'>
      <h1>Task Manager</h1>
      <button onClick={handleShowListClick}>Show List</button>
      <button onClick={handleAddNewListClick}>Add New List</button>
      <hr />
      <p>Used:</p>
      <ul>
        <li>ReactJS</li>
        <li>Express</li>
        <li>NodeJS</li>
        <li>MongoDB</li>
      </ul>

      <hr/>
      <p>Backend: <a href='https://task-manager-backend-b9m3.onrender.com'>https://task-manager-backend-b9m3.onrender.com</a></p>
      <p>Frontend: <a href='https://unique-selkie-ada692.netlify.app/'>https://unique-selkie-ada692.netlify.app/</a></p>
      <p>Note: Because of time constraint not able to beautify it.</p>
      <a href='https://github.com/vishalkashyap247'>GitHub</a>
      <span>  </span>
      <a href='https://www.linkedin.com/in/vishal-kashyap-447a451ba'>LinkedIn</a>
      <p>Owner: Vishal Kashyap</p>
    </div>
  );
};
