import { useState } from "react";
import { User } from "../../model/userModel";

export function useLoginVM() {
  const [user, setUser] = useState<User[]>([]);

  function login(username: string, password: string) {
    loginOnServer(username, password);
  }
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
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  }
  
  return {
    login
  };
}
