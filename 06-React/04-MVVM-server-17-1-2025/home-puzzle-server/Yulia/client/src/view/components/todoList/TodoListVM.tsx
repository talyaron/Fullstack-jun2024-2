import { useState, useEffect } from "react";
import { Task, TasksModel } from "../../../model/taskModel";

export const useTodoListMV = () => {
  const tasksModel = new TasksModel();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "done" | "undone">("all");

  // Fetch tasks from the server when the component is mounted
  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch tasks from the server and update the model
  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/tasks"); // Adjust the API endpoint
      const data: Task[] = await response.json();
      tasksModel.setTasks(data);
      setTasks(tasksModel.getTasks());
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  // Add a new task to the server and update the model
  const addTask = async (text: string) => {
    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, isCompleted: false }),
      });
      const newTask: Task = await response.json();
      tasksModel.addTask(newTask);
      updateFilteredTasks();
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  // Delete a task from the server and update the model
  const deleteTask = async (taskId: string) => {
    try {
      await fetch(`/api/tasks/${taskId}`, { method: "DELETE" });
      tasksModel.deleteTask(taskId);
      updateFilteredTasks();
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  // Toggle the completion status of a task on the server and update the model
  const toggleTaskCompletion = async (taskId: string) => {
    try {
      const task = tasksModel.getTasks().find((task) => task._id === taskId);
      if (!task) return;

      const updatedTask = { ...task, isCompleted: !task.isCompleted };

      await fetch(`/api/tasks/${taskId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isCompleted: updatedTask.isCompleted }),
      });

      tasksModel.toggleTaskCompletion(taskId);
      updateFilteredTasks();
    } catch (error) {
      console.error("Failed to toggle task completion:", error);
    }
  };

  // Filter tasks based on the selected filter
  const updateFilteredTasks = () => {
    const filteredTasks = tasksModel.filterTasksByStatus(filter);
    setTasks(filteredTasks);
  };

  // Set the current filter and update the displayed tasks
  const applyFilter = (status: "all" | "done" | "undone") => {
    setFilter(status);
    updateFilteredTasks();
  };

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTaskCompletion,
    applyFilter,
  };
};
