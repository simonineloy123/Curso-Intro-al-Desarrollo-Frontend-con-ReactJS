import React from "react";
import { Card, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Card style={{ width: "18rem", margin: "0 auto" }}>
      <Card.Body>
        <Card.Title>Iniciar Sesión</Card.Title>
        <Card.Text>
          Haz clic en el botón de abajo para iniciar sesión o registrarte.
        </Card.Text>
        <Button variant="primary" onClick={() => loginWithRedirect()}>
          Iniciar Sesión con Auth0
        </Button>
      </Card.Body>
    </Card>
  );
};

export default LoginPage;
