import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmpassword] = useState("");
  const navigate = useNavigate();

  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (enteredConfirmPassword !== enteredPassword) {
      alert("Both password are diffrent");
      return;
    }

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBgJdxOctDgkNgtoJPXFU1mTJsO4GuMGmM",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
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
        console.log(res.email);
        alert("Singup successfully");
        localStorage.setItem(
          "user",
          JSON.stringify({ token: res.idToken, email: enteredEmail })
        );
        navigate("/");
        console.log(res.idToken);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center flex-column"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #fff, #007bff 50%)",
      }}
    >
      <Card
        style={{ width: "350px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}
      >
        <Card.Body>
          <Card.Title
            className="text-center mb-4"
            style={{ fontSize: "1.5rem" }}
          >
            SignUp
          </Card.Title>
          <Form onSubmit={hanldeSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                value={enteredEmail}
                onChange={(e) => setEnteredEmail(e.target.value)}
                type="email"
                required
                placeholder="Email"
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                value={enteredPassword}
                onChange={(e) => setEnteredPassword(e.target.value)}
                required
                type="password"
                placeholder="Password"
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="cPassword">
              <Form.Control
                value={enteredConfirmPassword}
                onChange={(e) => setEnteredConfirmpassword(e.target.value)}
                required
                type="password"
                placeholder="Confirm Password"
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>

            <div className="d-grid">
              <Button
                variant="primary"
                type="submit"
                style={{ borderRadius: "10px" }}
              >
                Sign up
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      <div
        className="mt-3 text-center"
        style={{
          backgroundColor: "#e6f7eb",
          padding: "10px 20px",
          borderRadius: "5px",
          width: "350px",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <span style={{ color: "#6c757d" }}>
          Have an account?{" "}
          <Link to="/login" style={{ color: "#007bff" }}>
            Login
          </Link>
        </span>
      </div>
    </Container>
  );
}

export default Signup;
