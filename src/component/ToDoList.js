import { React, useState } from "react";
import { Link } from "react-router-dom";
//import { todolist } from "../data/todolist";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [job, setJob] = useState();
  const handleCheckboxChange = (id) => {
    const newTodos = todos.map((todo, index) => {
      if (index === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const handleSubmit = () => {
    const x = {
      text: job,
      completed: false,
    };
    setTodos((prev) => [...prev, x]);
    setJob("");
  };
  return (
    <div style={{ padding: 30 }}>
      <h2>Danh sách công việc</h2>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              <Link to={`/todo/${index}`}>{todo.text}</Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
