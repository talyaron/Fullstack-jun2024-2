import { useEffect, useState } from "react";
import { toDo } from "./toDoModel";


export function useTodosVM() {
    const [todos, setToDos] = useState<toDo[]>([]);
    const [newTodo, setNewTodo] = useState<string>("");

    useEffect(() => {
        fetchToDo()
    }, []);

    function fetchToDo() {
        fetch("http://localhost:3000/api/toDo/get-title")
        .then(response => response.json())
        .then(data => setToDos(data))
    }

    function setToDo(newTodo: toDo){
        fetch("http://localhost:3000/api/toDo/set-title", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo),
        })
       .then(response => response.json())
    }

    function setIsDone(id: string){
        fetch(`http://localhost:3000/api/toDo/is-done/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
       .then(response => response.json())
    }

    function deleteTodo(id: string){
        fetch(`http://localhost:3000/api/toDo/delete-title`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
       .then(response => response.json())

}
return {todos, newTodo, setNewTodo, fetchToDo, setToDo, setIsDone, deleteTodo};
}