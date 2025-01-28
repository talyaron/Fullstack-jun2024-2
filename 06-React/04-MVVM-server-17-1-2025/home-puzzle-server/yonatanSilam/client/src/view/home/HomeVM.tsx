import { useEffect, useState } from "react";
import { User } from "../../model/userModel";

export function useHomeVM() {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    fetchUserDetails();
  }, []);
  async function fetchUserDetails() {
    try {
       fetch("http://localhost:3000/api/users/details")
        .then((response) => response.json())
        .then((user) => setUser(user))
        .catch((error) => console.error(error));

    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }

  return {
    user,
    setUser,
    fetchUserDetails
  };
}
