import './App.css'
import TodoList from './view/components/toDo/toDo'
import ToDoAddItem from './view/components/toDo/toDoInputCard'
import { toDo } from "./view/components/toDo/toDoModel";

function App() {

  return (
    <>
    <ToDoAddItem />
     <TodoList />
    </>
  )
}

export default App
