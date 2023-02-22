import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';

export default function Footer() {

    return (
        <Container fluid className="footer">
            <a href="https://marvel.com" target="_blank">Data provided by Marvel. © 2014 Marvel</a>
        </Container>
    );
}
