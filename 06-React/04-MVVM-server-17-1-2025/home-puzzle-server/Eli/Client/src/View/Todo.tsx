import React, { useEffect, useRef, useState } from "react";
import style from "./Todo.module.scss";
import { useNavigate } from "react-router";
import TodoFunc from "./TodoFunc";

function Todo() {
  const {loading, tasks,fetchData, handleCheck, deleteTask, handleClick } = TodoFunc();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className={style.title}> TODO app</h1>
      <div className={style.content}>
        {loading?  <h1>Loading <div className={style.rotate}>↻</div></h1>:"" }
        {tasks.map((task, index) => {
          return (
            <div className={style.task} key={index}>
              <h4 className={task.isDone ? style.marked : ""}>{task.text}</h4>
              <input
                type="checkbox"
                name="checked"
                onChange={() => handleCheck(index, task._id)}
                checked={task.isDone}
              />
              <button
                className={style.delete}
                onClick={() => deleteTask(index, task._id)}
              >
                ❌
              </button>
            </div>
          );
        })}
      </div>
      <form className={style.inputHolder} onSubmit={handleClick}>
        <input type="text" name="text" className={style.textInput} />
        <input type="submit" value="add task" className={style.btnInput} />
      </form>
    </>
  );
}

export default Todo;
