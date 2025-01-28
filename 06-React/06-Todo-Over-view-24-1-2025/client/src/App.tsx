import { useAppVM } from './AppMV';
import TodoCard from './view/components/todo/TodoCard';

function App() {
  const { todos } = useAppVM();

  return (
    <div>
      <ul>
        {todos.map((todo) => (<TodoCard key={todo._id} todo={todo}/>)) }
      </ul>
    </div>
  )
}

export default App
