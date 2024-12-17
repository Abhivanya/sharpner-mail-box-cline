import React, { useRef, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import JoditEditor from "jodit-react";

const SendMail = () => {
  const editor = useRef(null);
  const [reciverEmail, setReciverEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const config = {
    placeholder: "Write Message here",
    height: "380px",
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    toolbarSticky: false,
    buttons: [
      "bold",
      "italic",
      "underline",
      "|",
      "align",
      "ul",
      "ol",
      "|",
      "link",
      "image",
      "|",
      "undo",
      "redo",
    ],
  };

  const handleSend = () => {
    const { email: senderEmail } = JSON.parse(localStorage.getItem("user"));
    const senderId = senderEmail.replace(".", "_");
    console.log(senderId);
    const reciverId = reciverEmail.replace(".", "_");
    console.log(senderId);
    if (!reciverEmail || !subject || !content) {
      alert("Please fill in all fields!");
      return;
    }

    fetch(
      `https://mail-box-c-default-rtdb.firebaseio.com/${senderId}/sent.json`,
      {
        method: "POST",
        body: JSON.stringify({
          to: reciverEmail,
          timestmps: new Date().toString(),
          subject: subject,
          content: content,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          throw new Error(res.error);
        }

        // alert("Email Sent");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });

    fetch(
      `https://mail-box-c-default-rtdb.firebaseio.com/${reciverId}/inbox.json`,
      {
        method: "POST",
        body: JSON.stringify({
          from: senderEmail,
          timestmps: new Date().toString(),
          subject: subject,
          content: content,
          read: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          throw new Error(res.error);
        }

        alert("Email Sent");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
    setContent("");
    setSubject("");
    setReciverEmail("");
  };

  return (
    <Container>
      <Form.Group id="email">
        <Form.Label>To:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter recipient's email"
          value={reciverEmail}
          onChange={(e) => setReciverEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group id="subject">
        <Form.Label>Subject:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </Form.Group>
      {/* <pre>{content}</pre> */}
      <Form.Group id="editor">
        <Form.Label>Content:</Form.Label>
        <JoditEditor
          ref={editor}
          value={content}
          tabIndex={1}
          config={config}
          onBlur={(newContent) => setContent(newContent)}
        />
      </Form.Group>

      <Button variant="primary" className="mt-2" onClick={handleSend}>
        Send
      </Button>
    </Container>
  );
};

export default SendMail;
