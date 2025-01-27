import React, { useState } from 'react'
import { useNavigate } from 'react-router';

interface Task {
    _id: string;
    isDone: boolean;
    text: string;
    creatorId: string;
  }
  interface Filter {
    selected: "all" | "done" | "undone";
  }
function TodoFunc() {
const [tasks, setTask] = useState<Task[]>([]);
const [filter, setFilter] = useState<Filter["selected"]>("all");

const [loading, setLoading] = useState<boolean>(true);
  

  const navigate = useNavigate();

    ///client
      function handleClick(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const task = formData.get("text") as string;
    
        if (task.trim() === "") return;
        addTaskToServer(task);
       fetchData();
       form.reset();
      }
    
      function deleteTask(index: any, id: string) {
        setTask((prevTasks) => prevTasks.filter((_, i) => i !== index));
        deleteOnServer(id);
      }
    
      function handleCheck(index: number, id: string) {
        const updatedTasks = [...tasks];
        updatedTasks[index].isDone = !updatedTasks[index].isDone;
        setTask(updatedTasks);
        updateMarkOnServer(id);
      }


       ///server:

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
            navigate("/login");
            return;
          }
    
          const data = await response.json();
          const { todoList } = data;
          setLoading(false);
          setTask(todoList);
        } catch (error) {
          console.error(error);
        }
      }
    
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

  return (
      {filter,loading,tasks,setFilter,fetchData,handleCheck,deleteTask,handleClick}
  )
}

export default TodoFunc
