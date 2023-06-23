import React, { useState } from "react";
import "../styles/App.css";

function Task({ addTask }) {
  const [newTask, setNewTask] = useState("");

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      addTask(newTask.trim());
      setNewTask("");
    }
  };

  return (
    <>
      <div className="taskbar">
        <input
          id="task"
          type="text"
          placeholder="Enter A Quick Task.."
          value={newTask}
          onChange={handleTaskChange}
        />
        <button id="btn" onClick={handleAddTask}>
          +
        </button>
      </div>
    </>
  );
}

export default Task;
