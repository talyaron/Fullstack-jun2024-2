import React from "react";
import { useTodoListMV } from "./TodoListVM";
import styles from "./ToDoList.module.scss";

const ToDoList: React.FC = () => {
  const {
    tasks,
    addTask,
    deleteTask,
    toggleTaskCompletion,
    toggleEditMode,
    applyFilter,
    updateTask,
    filter,
  } = useTodoListMV();

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

      {/* Filter Buttons */}
      <div className={styles.filterContainer}>
        <button
          onClick={() => applyFilter("all")}
          className={`${styles.filterButton} ${
            filter === "all" ? styles.activeFilter : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => applyFilter("done")}
          className={`${styles.filterButton} ${
            filter === "done" ? styles.activeFilter : ""
          }`}
        >
          Done
        </button>
        <button
          onClick={() => applyFilter("undone")}
          className={`${styles.filterButton} ${
            filter === "undone" ? styles.activeFilter : ""
          }`}
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
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => toggleTaskCompletion(task._id)}
                className={styles.checkbox}
              />

              {/* Editable Task Text */}
              {task.isEditing ? (
                <input
                  type="text"
                  defaultValue={task.text}
                  onBlur={(e) => updateTask(task._id, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateTask(
                        task._id,
                        (e.target as HTMLInputElement).value
                      );
                    }
                  }}
                  className={styles.taskInput}
                />
              ) : (
                <span className={styles.taskText}>{task.text}</span>
              )}

              {/* Update & Delete Buttons */}
              <div className={styles.actionButtons}>
                <button
                  className={styles.updateButton}
                  onClick={() => toggleEditMode(task._id)}
                >
                  Update
                </button>

                <button
                  className={styles.deleteButton}
                  onClick={() => deleteTask(task._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
