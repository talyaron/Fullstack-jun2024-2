import React from 'react'
import { Task } from '../../model/taskModel';
import styles from "./TaskCard.module.scss";


interface Props {
    task: Task;
  }

const TaskCard:React.FC<Props> = ({task}) => {
  return (
    <div className={styles.task}>
      <h2 className={`${styles.h2} ${task.done ? styles.done : styles.unDone}`}>{task.text}</h2>
      <div>{task.done ? "Done" : "to Compleat" }</div>
    </div>
  )
}

export default TaskCard
