import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const SendMail = () => {
  const [editorState, setEditorState] = useState("");

  const handleChange = (value) => {
    setEditorState(value);
  };
  return (
    <Container>
      <Form.Group id="email" className="flex">
        <Form.Label>To :</Form.Label>
        <Form.Control type="email" placeholder="Enter Email " />
      </Form.Group>
      <Form.Group id="subject" className="flex">
        <Form.Label>Subject :</Form.Label>
        <Form.Control type="text" placeholder="Subject " />
      </Form.Group>
      <ReactQuill value={editorState} onChange={handleChange} />
      <Button variant="primary">Send</Button>
    </Container>
  );
};

export default SendMail;
