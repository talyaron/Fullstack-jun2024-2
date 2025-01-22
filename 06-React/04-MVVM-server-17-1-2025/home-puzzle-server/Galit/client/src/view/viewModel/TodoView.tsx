import React, { useState } from 'react';
import { Todo } from '../model/TodoModel';
import styles from './Todo.module.scss';

type TodoViewProps = {
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

const TodoView: React.FC<TodoViewProps> = ({ todos, addTodo, removeTodo, toggleTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className={styles['todo-container']}>
      <h1 className={styles['todo-header']}>Todo List</h1>
      <div className={styles['todo-input-container']}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className={styles['todo-list']}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`${styles['todo-item']} ${todo.isDone ? styles['done'] : ''}`}
          >
            <span>{todo.title}</span>
            <div className={styles['todo-actions']}>
              <button
                className={styles['done-btn']}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.isDone ? 'Undo' : 'Done'}
              </button>
              <button
                className={styles['remove-btn']}
                onClick={() => removeTodo(todo.id)}
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