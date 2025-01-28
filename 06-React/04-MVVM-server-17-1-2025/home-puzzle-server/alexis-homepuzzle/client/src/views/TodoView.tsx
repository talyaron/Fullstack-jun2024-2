import React, { useEffect, useState } from "react";
import { Todo } from "../models/Todo";
import { fetchTodos, createTodo, deleteTodo, toggleTodo } from "../viewmodels/TodoViewModel";

const TodoView = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [title, setTitle] = useState("");
    const [filter, setFilter] = useState<"all" | "done" | "undone">("all");

    useEffect(() => {
        fetchTodos().then(setTodos);
    }, []);

    const handleAddTodo = async () => {
        if (!title) return;
        const newTodo = await createTodo(title);
        setTodos([...todos, newTodo]);
        setTitle("");
    };

    const handleDeleteTodo = async (id: string) => {
        await deleteTodo(id);
        setTodos(todos.filter((todo) => todo._id !== id));
    };

    const handleToggleTodo = async (id: string) => {
        const updatedTodo = await toggleTodo(id);
        setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
    };

    const filteredTodos = todos.filter((todo) =>
        filter === "all" ? true : filter === "done" ? todo.completed : !todo.completed
    );

    return (
        <div>
            <h1>Todo List</h1>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add</button>
            <div>
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("done")}>Done</button>
                <button onClick={() => setFilter("undone")}>Undone</button>
            </div>
            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo._id}>
                        <span
                            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                            onClick={() => handleToggleTodo(todo._id)}
                        >
                            {todo.title}
                        </span>
                        <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoView;
