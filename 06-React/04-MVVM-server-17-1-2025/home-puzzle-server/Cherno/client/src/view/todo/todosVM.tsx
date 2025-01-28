import { useEffect, useState } from "react";
import { TodoModel } from "./TodoModel";

export function useTodosVM() {
    const [todos, setTodos] = useState<TodoModel[] >([]);

    
    function getAllTodos() {
        fetchTodos();
    }

    useEffect(() => {
        getAllTodos();
    }, []);

    function fetchTodos () {
        fetch('http://localhost:3000/api/todos/get-all-todos')
            .then((response) => response.json())
            .then((data) => setTodos(data.todos))
            .catch((error) => console.error(error))
    }

    
    function addTodo(event: React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const title = (form.querySelector('.title') as HTMLInputElement)?.value;
        const content = (form.querySelector('.content') as HTMLInputElement)?.value;

        fetch('http://localhost:3000/api/todos/add-todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
        }).then(() => getAllTodos());
    } 
    
    return { todos, getAllTodos, addTodo };
}
  