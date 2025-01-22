import { useState } from 'react';
import { Todo } from '../model/TodoModel';

export const useTodoViewModel = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    const newTodo = new Todo(Date.now(), title);
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? new Todo(todo.id, todo.title, !todo.isDone) : todo
      )
    );
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
  };
};