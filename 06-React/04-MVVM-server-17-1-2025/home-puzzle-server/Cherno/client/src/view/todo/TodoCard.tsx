import React from 'react'
import { TodoModel } from './TodoModel';
import styles from './TodoCard.module.scss';
import { useTodoCardVM } from './todoCardVM';

interface Props {
    todo: TodoModel;
}

const TodoCard: React.FC<Props> = ({ todo }) => {
    const { state, updateTodo, deleteTodo } = useTodoCardVM(todo.ifDone);

    return (
        <div className={styles["todo-card"]} >
            <h2>{todo.title}</h2>
            <p>{todo.content}</p>
            <input id={todo._id} type="checkbox" name="ifDone" checked={state} onChange={updateTodo}></input>
            <input id={todo._id} type="button" name="delete" value="X" onClick={deleteTodo}></input>
        </div>
    );
};
 
export default TodoCard