import React, { useState, useEffect } from "react";
import { toDo } from "./toDoModel";
import { useTodosVM } from "./toDoMV";
import style from "./toDoInputCard.module.scss"

interface Props {
    toDo: toDo;
}

const ToDoAddItem: React.FC<Props> = ({ }) => {
    const { setToDo } = useTodosVM();
    const [inputValue, setInputValue] = useState('');

    function insertToDo(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(inputValue)
        setInputValue('');
        const newTodo: toDo ={
            title: inputValue
        };
        setToDo(newTodo);
        window.location.reload();
    }


    return (
        <div>
            <h2>Welcome to YosefIB* To Do Page</h2>
            <form onSubmit={insertToDo}>
            <button style={{background:"yellow"}} type="submit">⬇️ תוסיף משימה ⬇️</button>
            <br /> <br />
                <input
                    className={style.input}
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new todo..."
                />
                
            </form>
        </div>
    );
};

export default ToDoAddItem;