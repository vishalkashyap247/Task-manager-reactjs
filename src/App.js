import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskDetail from "./components/TaskDetail";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  // const [isAddingTask, setIsAddingTask] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios
      .get("https://task-manager-backend-b9m3.onrender.com/api/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  };

  const addTask = (task) => {
    axios
      .post("https://task-manager-backend-b9m3.onrender.com/api/tasks", task)
      .then((response) => {
        setTasks([...tasks, response.data]);
        // setIsAddingTask(false);
      })
      .catch((error) => console.error("Error adding task:", error));
  };

  // const handleAddTaskClick = () => {
  //   setIsAddingTask(true);
  // };

  // const handleCancelClick = () => {
  //   setIsAddingTask(false);
  // };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/form" element={<TaskForm onSubmit={addTask} />} />
        <Route path="/list" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskDetail />} />
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
