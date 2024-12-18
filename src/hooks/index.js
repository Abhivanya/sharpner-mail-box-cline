import { useState } from "react";

export const useAuth = () => {
  const [data, setData] = useState();
  const authenticate = async (url, email, password) => {
    if (!url || !email || !password) return;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          throw new Error(res.error);
        }
        setData(res);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
    return data;
  };

  return { authenticate };
};
