import TodoCard from './TodoCard';
import { TodoModel } from './TodoModel';
import { useTodosVM } from './todosVM';


const Todos = () => {

  const { todos, addTodo } = useTodosVM();

  return (
    <div>
      <h1>todos:</h1>
      {todos.map((todo:TodoModel) => (<TodoCard todo={todo} />))}
      <h1>add todo:</h1>
      <form onSubmit={addTodo}>
        <input type="text" className='title' />
        <input type="text" className='content' />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default Todos