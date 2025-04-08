import { FC } from "react";
interface RegisterProps {
  setIsLogin: (isLogin: boolean) => void;
}
const Register: FC<RegisterProps> = ({ setIsLogin }) => {
  async function register(e: React.FormEvent) {
    e.preventDefault(); // Prevent page reload on form submission

    // Get form data
    const form = new FormData(e.target as HTMLFormElement);
    const username = form.get("username") as string;
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    // Send request to server
    const response = await fetch("http://localhost:3000/api/users/register", {
      method: "POST",
      credentials:"include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      alert("user registered");
      setIsLogin(true);
    } else {
      alert("register error");

      console.error("Registration failed");
    }
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={register}>
        <input type="text" placeholder="enter username" name="username" />
        <input type="text" placeholder="enter email" name="email" />
        <input type="text" placeholder="enter password" name="password" />
        <input type="submit" placeholder="submit" name="submit" />
      </form>
      <button onClick={() => setIsLogin(true)}> to login</button>
    </div>
  );
};

export default Register;
