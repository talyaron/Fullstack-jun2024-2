import { useEffect, useState } from "react";

const Auth = () => {
  const [userLogged, setUserLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  async function checkCookie() {
    const response = await fetch("http://localhost:3000/api/auth/checkCookie", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setUserLogged(true);
      setLoading(false);
    } else {
      setUserLogged(false);
      setLoading(false);
    }
  }

  useEffect(() => {
    checkCookie();
  }, []);
  return { userLogged, loading };
};

export default Auth;
