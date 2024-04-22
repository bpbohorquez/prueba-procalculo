import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { deleteToken } from "../../utils/localStorage";

export const NavigationBar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    deleteToken();
    dispatch(logout());
  };

  return (
    <div>
      <Navbar bg="primary-subtle" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Procalculo
            </Link>
          </Navbar.Brand>

          <Nav>
            {isLoggedIn ? (
              <>
                <Nav.Link>
                  <Link
                    onClick={handleLogout}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Cerrar sesión
                  </Link>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Iniciar sesión
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    Registrarse
                  </Link>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

// , color: "white"
