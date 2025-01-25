import { useState, useEffect } from 'react';
import { Todo } from '../model/TodoModel';

export const useTodoViewModel = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchTodos = async () => {
    try {
      const response = await fetch('/api/todos');
      const text = await response.text(); 
  
      if (!response.ok) {
        throw new Error(`Failed to fetch todos: ${text}`);
      }
  
      const data = JSON.parse(text); 
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
      setError('Failed to load todos. Please try again later.');
    }
  };
  
  
  useEffect(() => {
    fetchTodos();
  }, []); 


  const addTodo = async (userId: string, title: string, description: string, isDone: boolean = false) => {
    const newTodo = new Todo(Date.now().toString(), userId, title, description, isDone);

    try {
      const response = await fetch('/api/todos/set', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          title,
          description,
          isDone,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to add todo: ${errorText}`);
      }

      const data = await response.json();
      setTodos((prevTodos) => [...prevTodos, data]);
    } catch (error) {
      console.error('Error adding todo:', error);
      setError('Failed to add the todo. Please try again later.');
    }
  };

  const removeTodo = async (id: string) => {
    try {
      const response = await fetch('/api/todos/remove', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to remove todo: ${errorText}`);
      }

      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error('Error removing todo:', error);
      setError('Failed to remove the todo. Please try again later.');
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo._id === id
          ? new Todo(todo._id, todo.userId, todo.title, todo.description, !todo.isDone)
          : todo
      )
    );
  };

  return {
    todos,
    error, // Return error state to display in UI
    addTodo,
    removeTodo,
    toggleTodo,
    fetchTodos, // Optional: You can manually trigger a refetch if needed
  };
};
