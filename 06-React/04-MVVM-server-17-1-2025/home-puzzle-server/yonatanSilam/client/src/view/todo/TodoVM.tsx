import { useEffect, useState } from "react";
import { Task } from "../../model/taskModel";

export function useTodoVM() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // fetchTasks();
  }, []);

  function getAllTasks() {
    fetchTasks();
  }
  function fetchTasks() {
    fetch("http://localhost:3000/api/tasks/get-all-tasks", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setTasks(data.tasks))
      .catch((error) => console.error(error));
  }

  function addNewTask(text: string) {
    setTaskOnServer(text);
  }
  async function setTaskOnServer(text: string) {
    const response = await fetch("http://localhost:3000/api/tasks/addTask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
      }),
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  }
  async function removeTaskOnServer(taskId: string) {
    const response = await fetch("http://localhost:3000/api/tasks/deleteTask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        taskId,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  }
  async function changeToDoneOnServer(taskId: string) {
    const response = await fetch(
      "http://localhost:3000/api/tasks/markTaskAsDone",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          taskId,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  }
  function deleteTask(taskId: string) {
    removeTaskOnServer(taskId);
    const updatedTasks = tasks.filter((task) => task._id !== taskId);
    setTasks(updatedTasks);
  }
  function markTaskAsDone(taskId: string) {
    changeToDoneOnServer(taskId);
    const updatedTasks = tasks.map((task) =>
      task._id === taskId ? { ...task, done: true } : { ...task }
    );
    setTasks(updatedTasks);
  }
  function getUnDoneTasks() {
    fetchUnDoneTasks();
  }
  function getDoneTasks() {
    fetchDoneTasks();
  }
  function fetchDoneTasks() {
    fetch("http://localhost:3000/api/tasks/get-done-tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data.completedTasks))
      .catch((error) => console.error(error));
  }
  function fetchUnDoneTasks() {
    fetch("http://localhost:3000/api/tasks/get-unDone-tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data.unCompletedTasks))
      .catch((error) => console.error(error));
  }
  return {
    setTasks,
    tasks,
    addNewTask,
    getAllTasks,
    deleteTask,
    markTaskAsDone,
    getUnDoneTasks,
    getDoneTasks,
  };
}
