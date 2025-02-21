import { useState } from "react";
import { User } from "../../model/userModel";

export function useRegisterVM() {
  const [user, setUser] = useState<User[]>([]);

  function addNewUser(username: string, password: string) {
    setUserOnServer(username, password);
  }
  async function setUserOnServer(username: string, password: string) {
    const response = await fetch(
      "http://localhost:3000/api/users/register",
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
    addNewUser
  };
}
