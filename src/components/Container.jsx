import React, { useState } from "react";
import "../styles/App.css";
import Clock from "./Clock";
import Task from "./Task";

function Container() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    const task = {
      id: Date.now(),
      content: newTask.trim(),
      completed: false,
    };
    setTasks([task, ...tasks]);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Clock />
          <div className="content">
            {tasks.map((task) => (
              <div key={task.id} className="task-wrapper">
                <div
                  className={`task-item ${task.completed ? "completed" : ""}`}
                >
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                  />
                  <span>{task.content}</span>
                  <button
                    onClick={() => removeTask(task.id)}
                    className="remove-button"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Task addTask={addTask} />
        </div>
      </div>
    </>
  );
}

export default Container;
