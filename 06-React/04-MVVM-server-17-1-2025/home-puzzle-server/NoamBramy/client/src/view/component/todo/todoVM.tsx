import { useState, useEffect } from "react";
import { Todo } from "../../../model/todo/todoModel";

export function useTodosVM() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "done" | "undone">("all");

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await fetch("http://localhost:3000/api/todos/get-todos", {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) throw new Error("Failed to fetch todos");
      const data: Todo[] = await response.json();
      setTodos(data);
    } catch (err) {
      console.error(err);
    }
  }

  function filteredTodos() {
    if (filter === "done") return todos.filter((todo) => todo.isDone);
    if (filter === "undone") return todos.filter((todo) => !todo.isDone);
    return todos;
  }

  async function addTodo(title: string) {
    try {
      const response = await fetch("http://localhost:3000/api/todos/create-todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
        credentials: 'include', // חשוב!
      });
      if (!response.ok) throw new Error("Failed to add todo");
      const newTodo: Todo = await response.json();
      setTodos((prev) => [...prev, newTodo]);
    } catch (err) {
      console.error(err);
    }
  }
  

  async function toggleTodo(id: string) {
    try {
      const response = await fetch(`http://localhost:3000/api/todos/toggle-todo/${id}`, {
        method: "PATCH",
      });
      if (!response.ok) throw new Error("Failed to toggle todo");
      const updatedTodo: Todo = await response.json();
      setTodos((prev) =>
        prev.map((todo) => (todo._id === id ? updatedTodo : todo))
      );
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteTodo(id: string) {
    try {
      const response = await fetch(`http://localhost:3000/api/todos/delete-todo/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete todo");
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  return {
    todos: filteredTodos(),
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
}
