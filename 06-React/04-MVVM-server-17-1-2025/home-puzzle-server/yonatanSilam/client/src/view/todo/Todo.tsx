import styles from "./Todo.module.scss";
import { FormEvent } from "react";
import { useTodoVM } from "./TodoVM";
import { Task } from "../../model/taskModel";
import TaskCard from "../taskCard/TaskCard";

const Todo = () => {
  const {
    getAllTasks,
    tasks,
    addNewTask,
    deleteTask,
    markTaskAsDone,
    getDoneTasks,
    getUnDoneTasks,
  } = useTodoVM();
  function handleAddTask(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const form = event.currentTarget;
    const text = form.text.value;

    addNewTask(text);
    form.reset();
  }

  return (
    <div>
      <div className={styles.container}>
        <h1>Add Task</h1>
        <form onSubmit={handleAddTask} className={styles.form}>
          <input name="text" type="text" placeholder="title" required />
          <button type="submit" className={styles.btn}>
            add task
          </button>
        </form>
      </div>

      <div className={styles.container}>
        <h1> Tasks</h1>
        <button onClick={getAllTasks}>All</button>
        <button onClick={getDoneTasks}>done</button>
        <button onClick={getUnDoneTasks}>unDone</button>

        {tasks.map((task: Task) => (
          <TaskCard
            key={task._id}
            task={task}
            deleteTask={deleteTask}
            markTaskAsDone={markTaskAsDone}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
