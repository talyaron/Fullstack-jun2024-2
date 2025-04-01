import React from "react";
import { Task } from "../../model/taskModel";
import styles from "./TaskCard.module.scss";

interface Props {
  task: Task;
  deleteTask: (taskId: string) => void;
  markTaskAsDone:(taskID:string)=> void;
}

const TaskCard: React.FC<Props> = ({ task, deleteTask,markTaskAsDone }) => {
  return (
    <div className={styles.task}>
      <h2 className={`${styles.h2} ${task.done ? styles.done : styles.unDone}`}>
        {task.text}
      </h2>
      <button onClick={() => markTaskAsDone(task._id)} className={styles.status}>{task.done ? "Done" : "to Compleat"}</button>
      <button className={styles.deleteBtn} onClick={() => deleteTask(task._id)}>delete</button>
    </div>
  );
};

export default TaskCard;
