import './App.css'
import TodoList from './view/components/toDo/toDo'
import ToDoAddItem from './view/components/toDo/toDoInputCard'
import LoginRegisterForm from './view/components/loginRegisterForm/LoginRegisterForm'
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router'

function App() {

  return (
    <>  {/* עטוף את הרכיב שלך בתוך ה- Router */}
      <LoginRegisterForm />
      {/* <ToDoAddItem />
      <TodoList /> */}

    </>
  )
}

export default App
