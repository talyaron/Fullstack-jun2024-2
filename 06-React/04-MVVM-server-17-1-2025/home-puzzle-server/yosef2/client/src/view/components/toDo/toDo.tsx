import { useTodosVM } from "./toDoMV";
import style from "./toDo.module.scss";
import { useState } from "react";

const TodoList = () => {
    const { todos } = useTodosVM();
    const [removedToDos, setRemovedToDos] = useState<string[]>([]); // deleted todo list
    const [doneToDos, setDoneToDos] = useState<string[]>([]); // done todo list

    console.log("remove array" + removedToDos)
    console.log("done array" + doneToDos)

    function ToDoClicked(id: string) {
        if (removedToDos.includes(id)) {
            // אם המזהה כבר ברשימה, נסיר אותו
            setRemovedToDos(removedToDos.filter((todoId) => todoId !== id));      
        } else {
            // אם המזהה לא ברשימה, נוסיף אותו
            setRemovedToDos([...removedToDos, id]);
        }
    }

    function checkedClicked(id: string) {
        if (doneToDos.includes(id)) {
            // אם המזהה כבר ברשימה, נסיר אותו
            setDoneToDos(doneToDos.filter((todoId) => todoId !== id));
        } else {
            // אם המזהה לא ברשימה, נוסיף אותו
            setDoneToDos([...doneToDos, id]);
        }
    }
        

    return (
        <>
        <h1>All To-Do List</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo._id} className={style.todoItem}>
                        <input
                            type="checkbox"
                            // checked={checkedToDos.includes(todo._id)} // אם הפריט כבר "מוסר", תיבת הסימון תסומ
                            onChange={() => checkedClicked(todo._id)} // שינוי מצב תיבת הסימון
                        />
                        <p className={removedToDos.includes(todo._id) ? style.remove : style.title} onClick={() => ToDoClicked(todo._id)}>
                            {todo.title}
                        </p>
                    </li>
                ))}
            </ul>

            <h1>Removed To-Do List</h1>
            <ul>
                {todos.map((todo) => (
                        <p
                            className={removedToDos.includes(todo._id) ? style.title : style.titleDisable }
                            onClick={() => ToDoClicked(todo._id)}
                        >
                            <span className={style.removed}>❌{todo.title}</span>
                        </p>
                ))}
            </ul>
            
            <h1>Done To-Do List</h1>
            <ul>
                {todos.map((todo) => (
                        <p
                            className={doneToDos.includes(todo._id) ?  style.title : style.titleDisable}
                        >
                            <span className={style.done}>✔ {todo.title}</span>
                            
                        </p>
                ))}
            </ul>
        </>
    );
};

export default TodoList;
