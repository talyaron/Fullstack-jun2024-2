
import { useEffect, useState } from 'react';
import { Todo } from './model/todoModel';
export function useAppVM() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/todo/get-todos')
            .then((res) => res.json())
            .then((data) => {
                const { todos, message, error } = data;
                if (message) {
                    console.error(message);
                }
                if (error) {
                    console.error(error);
                    return;
                }

                setTodos(todos);
            });
    }, []);

    return { todos };
}