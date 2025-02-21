import { FC } from 'react'
import { Todo } from '../../../model/todoModel'

interface Props{
    todo: Todo
}
const TodoCard:FC<Props> = ({todo}) => {
  return (
      <li>{todo.title}</li>
  )
}

export default TodoCard