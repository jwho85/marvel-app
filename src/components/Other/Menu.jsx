import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Menu() {

    const [heroName, setHeroName] = useState("");
    const [creatorName, setCreatorName] = useState("");

    useEffect(() => {
        setHeroName(localStorage.getItem('heroName'));
        setCreatorName(localStorage.getItem('creatorName'));

    }, []);

    return (
        <Navbar expand="lg" sticky="top" className="nav-bar">
            <Container>
                <Navbar.Brand as={Link} to={`/${heroName}`} className="logo-text">Marvel App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to={`/${heroName}`}>Heroes</Nav.Link>
                        <Nav.Link as={Link} to={"/comics"}>Comics</Nav.Link>
                        <Nav.Link as={Link} to={"/events"}>Events</Nav.Link>
                        <Nav.Link as={Link} to={"/series"}>Series</Nav.Link>
                        {/* <Nav.Link as={Link} to={"/stories"}>Stories</Nav.Link> */}
                        <Nav.Link as={Link} to={`/creators/${creatorName}`}>Creators</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
