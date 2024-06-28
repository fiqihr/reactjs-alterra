import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return savedTasks;
  });
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [totalTasks, setTotalTasks] = useState(tasks.length);
  const [deletedTasks, setDeletedTasks] = useState(0);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTotalTasks(tasks.length);
  }, [tasks]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleDeadlineChange = (e) => setDeadline(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      alert("Please enter a name for the task.");
      return;
    }
    const newTask = {
      id: Date.now(),
      name,
      description,
      deadline,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setName("");
    setDescription("");
    setDeadline("");
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setDeletedTasks((prevDeletedTasks) => prevDeletedTasks + 1);
  };

  useEffect(() => {
    alert("Selamat Datang");
    return () => {
      alert("Sampai Jumpa");
    };
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-primary fw-bold">Todo List</h2>
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea
            className="form-control"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Deadline:</label>
          <input
            type="date"
            className="form-control"
            name="deadline"
            value={deadline}
            onChange={handleDeadlineChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>

      <hr />

      <h3>Tasks:</h3>
      <p>Total Tasks: {totalTasks}</p>
      <p>Total Deleted Tasks: {deletedTasks}</p>
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item">
            <div>
              <strong>{task.name}</strong>
              {task.deadline && (
                <span className="ms-2">Deadline: {task.deadline}</span>
              )}
            </div>
            {task.description && (
              <p className="mt-2 mb-1">{task.description}</p>
            )}
            <button
              className="btn btn-danger btn-sm mt-2"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
