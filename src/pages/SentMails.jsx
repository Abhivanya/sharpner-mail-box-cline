import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const SentMails = () => {
  const [recivedEmail, setRecievedEmail] = useState();

  const getEmail = () => {
    const { email: userEmail } = JSON.parse(localStorage.getItem("user"));
    const userId = userEmail.replace(".", "_");
    fetch(`https://mail-box-c-default-rtdb.firebaseio.com/${userId}/sent.json`)
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          throw new Error(res.error);
        }
        setRecievedEmail(res);
      });
  };

  useEffect(() => {
    getEmail();
  }, []);

  return (
    <Container className="flex flex-col p-3">
      <h1 className="text-3xl font-bold text-blue-600">Sent Mail</h1>
      <div className="w-full  border-1 mt-2 "></div>
      <div>
        <ul>
          {recivedEmail &&
            Object.entries(recivedEmail).map((data) => {
              console.log(data);
              //   return <li key={key}>{email}</li>;
            })}
        </ul>
      </div>
    </Container>
  );
};

export default SentMails;
