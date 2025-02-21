import { useState } from "react";

export function useTodoCardVM(initialState: boolean) {
    const [state, setState] = useState<boolean>(initialState);

    const updateTodo = async (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        setState(event.target.checked);

        fetch('http://localhost:3000/api/todos/update-todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: event.target.id, ifDone: event.target.checked }),
        })
    }

    const deleteTodo = async(event: React.MouseEvent<HTMLInputElement>) =>
    {
        fetch('http://localhost:3000/api/todos/delete-todo', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: event.currentTarget.id }),
        });
    }

    return{
        updateTodo,
        deleteTodo,
        state
    }
}
  