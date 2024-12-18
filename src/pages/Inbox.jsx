import React, { useEffect, useRef, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import EmailListItem from "../components/EmailListItem";

const Inbox = ({ setUnreadEmail }) => {
  const [inboxMail, setInboxMail] = useState();
  const prevDataRef = useRef(null);
  const getEmail = () => {
    const { email: userEmail } = JSON.parse(localStorage.getItem("user"));
    const userId = userEmail.replace(".", "_");
    fetch(`https://mail-box-c-default-rtdb.firebaseio.com/${userId}/inbox.json`)
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          throw new Error(res.error);
        }
        if (res !== prevDataRef.current) {
          prevDataRef.current = res;
          setInboxMail(res);
        }
      });
  };

  useEffect(() => {
    const intervalId = setInterval(getEmail, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (inboxMail) {
      const unreadCount = Object.values(inboxMail).filter(
        (email) => !email.read
      ).length;
      setUnreadEmail(unreadCount);
    }
  }, [inboxMail, setUnreadEmail]);
  return (
    <Container className="flex flex-col p-3">
      <h1 className="text-3xl font-bold text-red-600">Inbox</h1>
      <div className="w-full  border-1 mt-2 "></div>
      <div>
        <ListGroup className="flex mt-3 flex-col p-3 w-[60vw] rounded-md  md:w-[80vw] min-h-4">
          {inboxMail &&
            Object.entries(inboxMail).map(([key, email]) => {
              return (
                <EmailListItem
                  key={key}
                  emailKey={key}
                  isRead={email.read}
                  type="recievedEmail"
                  emailId={email.from}
                  content={email.content}
                  subject={email.subject}
                  timestmps={email.timestmps}
                />
              );
            })}
        </ListGroup>
      </div>
    </Container>
  );
};

export default Inbox;
