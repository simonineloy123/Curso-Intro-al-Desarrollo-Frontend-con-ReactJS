import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Container className="mt-5">
            <Card style={{ width: "18rem", margin: "0 auto" }}>
                <Card.Title>Iniciar Sesion</Card.Title>
                <Card.Text>
                    Haz click en el boton de abajo para iniciar sesion o registrarte.
                </Card.Text>
                <Button variant="primary" onClick={() => loginWithRedirect()}>Iniciar Sesion con Auth0</Button>
            </Card>
        </Container>
    );
};

export default LoginPage;