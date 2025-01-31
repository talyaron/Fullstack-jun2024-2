import { useState, useEffect } from "react";
import { Task } from "../../../model/taskModel";

export const useTodoListMV = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "done" | "undone">("all");

  // Fetch tasks from the server when the component is mounted
  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch tasks from the server and update the model
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/tasks");
      const data: Task[] = await response.json();
      setTasks(data); // Directly update React state with fetched tasks
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  const addTask = async (text: string) => {
    try {
      const response = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }), // isCompleted defaults to false on the server
      });

      const newTask: Task = await response.json();
      setTasks((prevTasks) => [...prevTasks, newTask]); // add new task to the array
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  const deleteTask = async (taskId: string) => {
    try {
      await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
        method: "DELETE",
      });

      // Update React state by filtering out the deleted task
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const toggleTaskCompletion = async (taskId: string) => {
    try {
      const task = tasks.find((t) => t._id === taskId);
      if (!task) return;

      const updatedTask = await fetch(
        `http://localhost:3000/api/tasks/${taskId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ isCompleted: !task.isCompleted }),
        }
      ).then((res) => res.json());

      // Update state by mapping over tasks and replacing the updated task
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === taskId ? updatedTask : task))
      );
    } catch (error) {
      console.error("Failed to toggle task completion:", error);
    }
  };

  const updateTask = async (taskId: string, newText: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/tasks/${taskId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: newText }),
        }
      );

      if (!response.ok) throw new Error("Failed to update task");

      // update the tasks state with the updated task
      fetchTasks();
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };


  const toggleEditMode = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === taskId ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const applyFilter = async (status: "all" | "done" | "undone") => {
    try {
      setFilter(status);
      // fetch tasks based on the filter status
      const response = await fetch(
        `http://localhost:3000/api/tasks?filter=${status}`
      );
      const filteredTasks: Task[] = await response.json();

      // update the tasks state with the filtered tasks
      setTasks(filteredTasks);

      // update the filter state
      setFilter(status);
    } catch (error) {
      console.error("Failed to apply filter:", error);
    }
  };

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTaskCompletion,
    applyFilter,
    updateTask,
    filter,
    toggleEditMode,
  };
};
