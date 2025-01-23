import React, { useState } from 'react';
import { Todo } from '../model/TodoModel';
import styles from './Todo.module.scss';

type TodoViewProps = {
  todos: Todo[];
  addTodo: (userId: string, title: string, description: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

const TodoView: React.FC<TodoViewProps> = ({ todos, addTodo, removeTodo, toggleTodo }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAddTodo = () => {
    const userId = ' '; 
    if (newTitle.trim() && newDescription.trim()) {
      addTodo(userId, newTitle, newDescription);
      setNewTitle('');
      setNewDescription('');
    }
  };

  return (
    <div className={styles['todo-container']}>
      <h1 className={styles['todo-header']}>Todo List</h1>
      <div className={styles['todo-input-container']}>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Todo Title"
        />
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Todo Description"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className={styles['todo-list']}>
        {todos.map((todo) => (
          <li
            key={todo._id}
            className={`${styles['todo-item']} ${todo.isDone ? styles['done'] : ''}`}
          >
            <div>
              <span className={todo.isDone ? styles['done'] : ''}>{todo.title}</span>
              <p>{todo.description}</p>
            </div>
            <div className={styles['todo-actions']}>
              <button
                className={styles['done-btn']}
                onClick={() => toggleTodo(todo._id)}
              >
                {todo.isDone ? 'Undo' : 'Done'}
              </button>
              <button
                className={styles['remove-btn']}
                onClick={() => removeTodo(todo._id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoView;
