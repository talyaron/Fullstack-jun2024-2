import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTask] = useState<string[]>([]);
  const [markedTasks, setMarkedTasks] = useState<boolean[]>([]);

  function handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(e.target as HTMLFormElement);
    const task = formData.get("text") as string;
    if (task.trim() === "") return;
    setTask((prevTasks) => [...prevTasks, task]);
    form.reset();
    console.log(task);
  }

  function deleteTask(index: any) {
    setTask((prevTasks) => prevTasks.filter((_, i) => i !== index));
    setMarkedTasks((prevMarked) => prevMarked.filter((_, i) => i !== index));
  }

  function handleCheck(index: number) {
    setMarkedTasks((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  }
  return (
    <>
      <h1> TODO app</h1>
      <div id="content">
        {tasks.map((task, index) => {
          const isMarked = markedTasks[index] || false;
          return (
            <div className="task" key={index}>
              <h4 className={isMarked ? "marked" : ""}>{task}</h4>
              <input
                type="checkbox"
                name="checked"
                id="checkbox"
                onChange={() => handleCheck(index)}
                checked={isMarked}
              />
              <button id="delete" onClick={() => deleteTask(index)}>
                ❌
              </button>
            </div>
          );
        })}
      </div>
      <form id="inputHolder" onSubmit={(e) => handleClick(e)}>
        <input type="text" name="text" id="textInput" />
        <input type="submit" id="btnInput" value="create" />
      </form>
    </>
  );
}

export default App;
