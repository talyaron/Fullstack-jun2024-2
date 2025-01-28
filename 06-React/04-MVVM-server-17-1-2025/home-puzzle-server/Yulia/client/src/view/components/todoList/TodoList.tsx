import React from "react";
import { useTodoListMV } from "./TodoListVM"; 
import styles from "./ToDoList.module.scss";

const ToDoList: React.FC = () => {
  const { tasks, addTask, deleteTask, toggleTaskCompletion, applyFilter } =
    useTodoListMV();

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = new FormData(event.currentTarget).get("text") as string;
    if (text) {
      addTask(text);
      event.currentTarget.reset();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To-Do List</h1>

      {/* Task Filter */}
      <div className={styles.filters}>
        <button
          onClick={() => applyFilter("all")}
          className={styles.filterButton}
        >
          All
        </button>
        <button
          onClick={() => applyFilter("done")}
          className={styles.filterButton}
        >
          Done
        </button>
        <button
          onClick={() => applyFilter("undone")}
          className={styles.filterButton}
        >
          Undone
        </button>
      </div>

      {/* Task Addition */}
      <form onSubmit={handleAddTask} className={styles.addTaskForm}>
        <input
          type="text"
          name="text"
          placeholder="Add a task"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.addButton}>
          Add
        </button>
      </form>

      {/* Task List */}
      <ul className={styles.list}>
        {tasks.map((task) => (
          <li key={task._id} className={styles.taskItem}>
            <div className={styles.taskContent}>
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => toggleTaskCompletion(task._id)}
                className={styles.checkbox}
              />
              <span
                className={styles.taskText}
                style={{
                  textDecoration: task.isCompleted ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
            </div>

            <div className={styles.controls}>
              <div className={styles.toggleSwitch}>
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => toggleTaskCompletion(task._id)}
                  className={styles.slider}
                />
              </div>
              <button
                onClick={() => deleteTask(task._id)}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
