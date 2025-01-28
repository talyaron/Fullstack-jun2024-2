import { useEffect, useState } from "react";
import { toDo } from "./toDoModel";


export function useTodosVM() {
    const [todos, getTodos] = useState<toDo[]>([]);
    const [newTodo, setNewTodo] = useState<string>("");

    useEffect(() => {
        fetchToDo()
    }, []);

    function fetchToDo() {
        fetch("http://localhost:3000/api/toDo/get-title")
        .then(response => response.json())
        .then(data => getTodos(data))
    }

    return {todos, newTodo, setNewTodo, fetchToDo};
}