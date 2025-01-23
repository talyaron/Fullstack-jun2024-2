import { TodoList } from "./view/component/todo/Todo";
import AuthLogin from "./view/component/auth/authLogin";

function App() {
  const handleLoginSuccess = () => {
    console.log("Login successful!");
  };

  return (
    <>
      <AuthLogin onLoginSuccess={handleLoginSuccess} />
      <TodoList />
    </>
  );
}

export default App;
