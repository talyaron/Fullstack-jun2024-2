import React from 'react'
import ToDoAddItem from './toDoInputCard'
import TodoList from './toDo'

function ToDoMainPage() {
  return (
    <div>
          <ToDoAddItem />
          <TodoList />
    </div>
  )
}

export default ToDoMainPage
