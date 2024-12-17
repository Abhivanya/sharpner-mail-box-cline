import React, { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import EmailListItem from "../components/EmailListItem";

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
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
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
        <ListGroup className="flex mt-3 flex-col p-3 w-[60vw] rounded-md  md:w-[80vw] min-h-4">
          {recivedEmail && Object.keys(recivedEmail).length > 0 ? (
            Object.entries(recivedEmail).map(([key, email]) => {
              console.log(email);
              return (
                <EmailListItem
                  isRead={true}
                  key={key}
                  emailKey={key}
                  emailId={email.to}
                  content={email.content}
                  subject={email.subject}
                  type="sendEmail"
                  timestmps={email.timestmps}
                />
              );
            })
          ) : (
            <p className="text-gray-500">No Email.</p>
          )}
        </ListGroup>
      </div>
    </Container>
  );
};

export default SentMails;
