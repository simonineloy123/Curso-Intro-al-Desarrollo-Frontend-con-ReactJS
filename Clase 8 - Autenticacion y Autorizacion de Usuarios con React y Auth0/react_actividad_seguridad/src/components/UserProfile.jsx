import React from "react";
import { Container, Card, Image } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
    const { user, isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return <p>Debdes iniciar sesion para ver tu perfil.</p>
    }

    return (
        <Container className="mt-5 text-center">
            <Card style={{ width: "18rem", margin: "0 auto" }}>
                <Card.Body>
                    <Image src={user.picture} roundCircle fluid alt="User profile"/>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Title>Email: {user.email}</Card.Title>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default UserProfile;

