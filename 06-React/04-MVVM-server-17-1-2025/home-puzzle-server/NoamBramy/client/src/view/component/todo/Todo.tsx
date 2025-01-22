import React, { useState } from "react";
import { useTodosVM } from "./todoVM";

export const TodoList: React.FC = () => {
  const { todos, filter, setFilter, addTodo, toggleTodo, deleteTodo } =
    useTodosVM();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (!newTodo.trim()) return;
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("done")}>Done</button>
        <button onClick={() => setFilter("undone")}>Undone</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
              }}
              onClick={() => toggleTodo(todo._id)}
            >
              {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
