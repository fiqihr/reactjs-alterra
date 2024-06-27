import React, { Component } from "react";
import Button from "../elements/Button";

class TodoList extends Component {
  constructor(props) {
    super(props);
    // Membaca data dari localStorage jika tersedia, atau inisialisasi dengan array kosong
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.state = {
      tasks: savedTasks,
      name: "",
      description: "",
      deadline: "",
    };
  }

  // Handle form input changes
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission to add a new task
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, deadline } = this.state;
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
    this.setState(
      {
        tasks: [...this.state.tasks, newTask],
        name: "",
        description: "",
        deadline: "",
      },
      () => {
        // Simpan tasks ke localStorage setelah update state selesai
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }
    );
  };

  // Handle task deletion
  handleDelete = (taskId) => {
    const filteredTasks = this.state.tasks.filter((task) => task.id !== taskId);
    this.setState(
      {
        tasks: filteredTasks,
      },
      () => {
        // Simpan tasks ke localStorage setelah update state selesai
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }
    );
  };

  render() {
    const { tasks, name, description, deadline } = this.state;
    return (
      <div className="container mt-4">
        <h2 className="text-primary fw-bold">Todo List</h2>
        <form className="mt-5" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea
              className="form-control"
              name="description"
              value={description}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Deadline:</label>
            <input
              type="date"
              className="form-control"
              name="deadline"
              value={deadline}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </form>

        <hr />

        <h3>Tasks:</h3>
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
                onClick={() => this.handleDelete(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
