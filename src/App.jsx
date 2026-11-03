import { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn useState", completed: false },
    { id: 2, text: "Learn useEffect", completed: false },
    { id: 3, text: "Build a project", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask(e) {
    e.preventDefault();
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const incompleteCount = tasks.filter((task) => !task.completed).length;

  return (
    <div>
      <h1>To-Do List</h1>
      <p>{incompleteCount} task(s) left</p>

      <form onSubmit={handleAddTask}>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => toggleTask(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
