import React from 'react';
import TodoView from './view/viewModel/TodoView';
import { useTodoViewModel } from './view/viewModel/TodoVM';

const App: React.FC = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoViewModel();

  return <TodoView todos={todos} addTodo={addTodo} removeTodo={removeTodo} toggleTodo={toggleTodo} />;
};

export default App;
