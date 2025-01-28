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
    fetch("http://localhost:3000/api/tasks/get-all-tasks")
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
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  }

  return {
    setTasks,
    tasks,
    addNewTask,
    getAllTasks
  };
}
