import { useState } from "react";
import { User } from "../../model/userModel";
import { useNavigate } from "react-router-dom"; 
export function useLoginVM() {
  const [user, setUser] = useState<User[]>([]);

  function login(username: string, password: string) {
    loginOnServer(username, password);
  }
  const navigate = useNavigate();
  async function loginOnServer(username: string, password: string) {
    const response = await fetch(
      "http://localhost:3000/api/users/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
        credentials:"include"
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      await navigate("/home");

    }
  }
  
  return {
    login
  };
}
