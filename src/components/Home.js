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
    <div>
      <h1>Task Manager</h1>
      <button onClick={handleShowListClick}>Show List</button>
      <button onClick={handleAddNewListClick}>Add New List</button>
      <hr></hr>
      <p>Used: </p>
      <ul>
        <li>ReactJS</li>
        <li>Express</li>
        <li>NodeJS</li>
        <li>MongoDB</li>
      </ul>
      <p>Note: Because of time constraint not able to beautify it.</p>
      <a href='https://github.com/vishalkashyap247'>GitHub</a> <span>  </span>
      <a href='https://www.linkedin.com/in/vishal-kashyap-447a451ba'>LinkedIn</a>
      <p>Owner: Vishal Kashyap</p>
    </div>
  );
};

