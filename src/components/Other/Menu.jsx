import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Menu() {

    return (
        <Navbar expand="lg" sticky="top" className="nav-bar">
            <Container>
                <Navbar.Brand as={Link} to="/" className="logo-text">Marvel App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to={"/"}>Heroes</Nav.Link>
                        <Nav.Link as={Link} to={"/comics"}>Comics</Nav.Link>
                        <Nav.Link as={Link} to={"/events"}>Events</Nav.Link>
                        <Nav.Link as={Link} to={"/series"}>Series</Nav.Link>
                        {/* <Nav.Link as={Link} to={"/stories"}>Stories</Nav.Link> */}
                        <Nav.Link as={Link} to={"/creators"}>Creators</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
