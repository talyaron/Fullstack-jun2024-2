import { useState, useEffect } from 'react';
import { Todo } from '../model/TodoModel';

export const useTodoViewModel = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch('/api/todos'); 
      if (response.ok) {
        const data = await response.json();
        setTodos(data);
      } else {
        console.error('Failed to fetch todos');
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
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
          userId: userId,
          title: title,
          description: description,
          isDone: isDone,
        }),
      });

      if (response.ok) {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
      } else {
        console.error('Failed to add todo');
      }
    } catch (error) {
      console.error('Error adding todo:', error);
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

      if (response.ok) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
      } else {
        console.error('Failed to remove todo');
      }
    } catch (error) {
      console.error('Error removing todo:', error);
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
    addTodo,
    removeTodo,
    toggleTodo,
  };
};
