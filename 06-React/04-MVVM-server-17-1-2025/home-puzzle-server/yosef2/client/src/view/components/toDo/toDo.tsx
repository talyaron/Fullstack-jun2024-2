import { useTodosVM } from "./toDoMV";
import style from "./toDo.module.scss";
import { useState } from "react";

const TodoList = () => {
  const { todos, setIsDone, fetchToDo, deleteTodo } = useTodosVM();
  const [removedToDos, setRemovedToDos] = useState<string[]>([]); // deleted todo list
  const [doneToDos, setDoneToDos] = useState<string[]>([]); // done todo list
  const [selectedToDos, setSelectedToDos] = useState<string>("allToDo"); // selected todo list

  // console.log("remove array" + removedToDos)
  // console.log("done array" + doneToDos)
  console.log(selectedToDos);
  function deleteToDo(id: string) {
    deleteTodo(id);
    window.location.reload();
    if (removedToDos.includes(id)) {
      // אם המזהה כבר ברשימה, נסיר אותו
      setRemovedToDos(removedToDos.filter((todoId) => todoId !== id));
    } else {
      // אם המזהה לא ברשימה, נוסיף אותו
      setRemovedToDos([...removedToDos, id]);
    }
  }

  function checkedClicked(id: string) {
    setIsDone(id); // update the server for todo - is done or undone
    window.location.reload();

    if (doneToDos.includes(id)) {
      // אם המזהה כבר ברשימה, נסיר אותו
      setDoneToDos(doneToDos.filter((todoId) => todoId !== id));
    } else {
      // אם המזהה לא ברשימה, נוסיף אותו
      setDoneToDos([...doneToDos, id]);
    }
  }

  function filterToDo(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value); // כאן תופסים את הערך
    setSelectedToDos(e.target.value);
  }

  return (
    <>
      <br />
      <select onChange={filterToDo} className={style.select}>
        <option value="allToDo">All to do📋</option>
        <option value="allDone">Done✅</option>
        <option value="allNotDone">Not Done⏳</option>
      </select>

      <div className={selectedToDos == "allToDo" ? style.show : style.displayOff}>
        <ul>
          {todos.map((todo) => (
            <li key={todo._id} className={style.todoItem}>
              <input
                type="checkbox"
                checked={todo.isDone} // אם הפריט כבר "מוסר", תיבת הסימון תסומ
                onChange={() => checkedClicked(todo._id as string)} // שינוי מצב תיבת הסימון
              />
              <p
                className={
                  removedToDos.includes(todo._id as string)
                    ? style.remove
                    : style.title
                }
                onClick={() => deleteToDo(todo._id)}
              >
                <span>{todo.title}</span>
                <span onClick={() => deleteToDo(todo._id as string)}> ❌</span>
              </p>
            </li>
          ))}
        </ul>
      </div>


      <div className={selectedToDos == "allDone" ? style.show : style.displayOff}>
        <ul>
          {todos
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <li key={todo._id} className={style.todoItem}>
              <input
                type="checkbox"
                checked={todo.isDone} // אם הפריט כבר "מוסר", תיבת הסימון תסומ
                onChange={() => checkedClicked(todo._id as string)} // שינוי מצב תיבת הסימון
              />
              <p
                className={
                  removedToDos.includes(todo._id as string)
                    ? style.remove
                    : style.title
                }
                onClick={() => deleteToDo(todo._id)}
              >
                <span>{todo.title}</span>
                <span onClick={() => deleteToDo(todo._id as string)}> ❌</span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className={selectedToDos == "allNotDone" ? style.show : style.displayOff}>
        <ul>
          {todos
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <li key={todo._id} className={style.todoItem}>
              <input
                type="checkbox"
                checked={todo.isDone} // אם הפריט כבר "מוסר", תיבת הסימון תסומ
                onChange={() => checkedClicked(todo._id as string)} // שינוי מצב תיבת הסימון
              />
              <p
                className={
                  removedToDos.includes(todo._id as string)
                    ? style.remove
                    : style.title
                }
                onClick={() => deleteToDo(todo._id)}
              >
                <span>{todo.title}</span>
                <span onClick={() => deleteToDo(todo._id as string)}> ❌</span>
              </p>
            </li>
          ))}
        </ul>
      </div>

    </>
  );
};

export default TodoList;
