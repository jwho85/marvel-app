import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Menu() {

    const heroName = localStorage.getItem('heroName');
    const creatorName = localStorage.getItem('creatorName');

    let navigate = useNavigate();

    function changeLocation(placeToGo) {
        navigate(placeToGo, { replace: true });
        window.location.reload();
    }

    return (
        <Navbar expand="lg" sticky="top" className="nav-bar">
            <Container>
                <Navbar.Brand as={Link} to={`/${heroName}`} onClick={() => changeLocation(`/${heroName}`)} className="logo-text">Marvel App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to={`/${heroName}`} onClick={() => changeLocation(`/${heroName}`)}>Heroes</Nav.Link>
                        <Nav.Link as={Link} to={"/comics"} onClick={() => changeLocation("/comics")}>Comics</Nav.Link>
                        <Nav.Link as={Link} to={"/events"} onClick={() => changeLocation("/events")}>Events</Nav.Link>
                        <Nav.Link as={Link} to={"/series"} onClick={() => changeLocation("/series")}>Series</Nav.Link>
                        {/* <Nav.Link as={Link} to={"/stories"}>Stories</Nav.Link> */}
                        <Nav.Link as={Link} to={`/creators/${creatorName}`} onClick={() => changeLocation(`/creators/${creatorName}`)}>Creators</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
