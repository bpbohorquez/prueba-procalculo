import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./LogInCard.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { saveToken } from "../../utils/localStorage";

export default function LogInCard() {
  // Estados
  const [inputUsuario, setInputUsuario] = useState("");
  const [inputPassword, setInputPasssword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn]);

  // Redux Reducer
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Funciones SetState
  const handleChangeUsuario = (e) => {
    setInputUsuario(e.target.value);
  };

  const handleChangePassword = (e) => {
    setInputPasssword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    fetch("/users/login", {
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
        if (data.success) {
          saveToken(data.token);
          dispatch(signin());
        }
      });
  };

  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Iniciar Sesión</Card.Title>
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
              />
            </Form.Group>

            <Form.Text className="text-muted">No tienes una cuenta?</Form.Text>

            <Card.Link>
              <Link to="/signup"> Registrarse </Link>
            </Card.Link>

            <Button className="app-btn" variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <p>{mensaje}</p>
    </div>
  );
}
