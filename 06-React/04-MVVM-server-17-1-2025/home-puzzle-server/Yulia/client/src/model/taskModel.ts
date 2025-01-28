export interface Task {
  _id: string;
  text: string;
  isCompleted: boolean;
}

export class TasksModel {
  tasks: Task[] = [];

  setTasks(tasks: Task[]) {
    this.tasks = tasks;
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(newTask: Task) {
    this.tasks.push(newTask);
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task._id !== taskId);
  }

  updateTask(updatedTask: Task) {
    this.tasks = this.tasks.map((task) =>
      task._id === updatedTask._id ? updatedTask : task
    );
  }

  // change task status
  toggleTaskCompletion(taskId: string) {
    this.tasks = this.tasks.map((task) =>
      task._id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
  }

  // filter tasks by status
  filterTasksByStatus(status: "all" | "done" | "undone"): Task[] {
    if (status === "all") {
      return this.tasks;
    }
    const isCompleted = status === "done";
    return this.tasks.filter((task) => task.isCompleted === isCompleted);
  }
}