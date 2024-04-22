import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Spinner } from "react-bootstrap";

export default function SignUpCard() {
  const [inputUsuario, setInputUsuario] = useState("");
  const [inputPassword, setInputPasssword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeUsuario = (e) => {
    setInputUsuario(e.target.value);
  };

  const handleChangePassword = (e) => {
    setInputPasssword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsLoading(true);

    fetch("/users/signup", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: inputUsuario,
        password: inputPassword,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setMensaje(data.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Registrarse</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              onChange={handleChangeUsuario}
            >
              <Form.Control
                type="email"
                placeholder="Usuario"
                value={inputUsuario}
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              onChange={handleChangePassword}
            >
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={inputPassword}
                required
              />
            </Form.Group>

            <Button
              className="app-btn"
              variant="primary"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                "Registrarse"
              )}
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <p>{mensaje}</p>
    </div>
  );
}
