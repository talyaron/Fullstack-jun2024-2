import React, { useEffect, useRef, useState } from "react";
import style from "./Todo.module.scss";
import { useNavigate } from "react-router";

interface Task {
  _id: string;
  isDone: boolean;
  text: string;
  creatorId: string;
}

function Todo() {
  const [tasks, setTask] = useState<Task[]>([]);
  const [markedTasks, setMarkedTasks] = useState<boolean[]>([]);
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  async function fetchData() {
    try {
      const response = await fetch(
        "http://localhost:3000/api/todo/fetch-todo",
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        navigate("/");
        return;
      }

      const data = await response.json();
      console.log(data);
      const { todoList } = data;
      console.log(todoList);
      setTask(todoList);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function addTaskToServer(task: string) {
    const response = await fetch("http://localhost:3000/api/todo/add-todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ task }),
    });
    const data = await response.json();
    console.log(data);
  }

  function handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const task = formData.get("text") as string;

    if (task.trim() === "") return;
    addTaskToServer(task);
    setTask((prevTasks) => [...prevTasks, { _id:crypto.randomUUID(),text: task, isDone: false  , creatorId: ""
    }]);
  }

  function deleteTask(index: any, id: string) {
    setTask((prevTasks) => prevTasks.filter((_, i) => i !== index));
    deleteOnServer(id);
  }

  async function deleteOnServer(id: string) {
    const response = await fetch("http://localhost:3000/api/todo/delete-todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    console.log(data);
  }

  function handleCheck(index: number, id: string) {
    const updatedTasks = [...tasks];
    updatedTasks[index].isDone = !updatedTasks[index].isDone;
    setTask(updatedTasks);
    updateMarkOnServer(id);
  }

  async function updateMarkOnServer(id: String) {
    const response = await fetch(
      "http://localhost:3000/api/todo/checked-todo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <h1 className={style.title}> TODO app</h1>
      <div className={style.content}>
        {tasks.map((task, index) => {
          return (
            <div className={style.task} key={index}>
              <h4 className={task.isDone ? style.marked : ""}>{task.text}</h4>
              <input
                type="checkbox"
                name="checked"
                id="checkbox"
                onChange={() => handleCheck(index, task._id)}
                checked={task.isDone}
              />
              <button id="delete" onClick={() => deleteTask(index, task._id)}>
                ❌
              </button>
            </div>
          );
        })}
      </div>
      <form ref={formRef} className={style.inputHolder} onSubmit={handleClick}>
        <input type="text" name="text" className={style.textInput} />
        <input type="submit" value="add task" className={style.btnInput} />
      </form>
    </>
  );
}

export default Todo;
