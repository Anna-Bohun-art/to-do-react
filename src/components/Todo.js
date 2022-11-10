import React from "react";
import "./Todo.css";

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div className="todo-container">
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
          className="todo-checkbox"
        />
        {todo.name}
      </label>
    </div>
  );
}
