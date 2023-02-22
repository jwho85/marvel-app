import React, { useState, useEffect, useRef } from "react";
import { fetchEvents, fetchEventsByEventID } from '../../utils/utils';
import { Container, Row, Col, Card, CardHeader, CardImg, Button, Modal } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

export default function ComicsPage() {

    const [eventName, setEventName] = useState("");
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const buttonNameRef = useRef();

    useEffect(() => {
        const eventName = localStorage.getItem('eventName');
        setEventName(eventName);
        handleClick(eventName);
    }, []);

    const handleShow = async (eventID) => {
        setShow(true);
        try {
            let data = await fetchEventsByEventID(eventID);
            setEvent(data.data.results);
        } catch (err) {
            return err;
        }
    }

    const handleClick = async (eventName) => {
        try {
            let data = await fetchEvents(eventName);
            setEvents(data.data.results);
            localStorage.setItem('eventName', eventName);
        } catch (err) {
            return err;
        }
    }

    let randomKey = Math.random() * 1000;

    return (
        <Container className="homepage-container">
            <div>
                <div>
                    <h3>Search for your favorite Marvel events!</h3>
                    <br></br>
                    <input
                        className="search-input"
                        type="text"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                    ></input>
                    <Button
                        ref={buttonNameRef}
                        onClick={() => handleClick(eventName)}
                    >
                        Search Events
                    </Button>
                </div>
                <Row className="heroes-row">
                    {events.length > 0 ? events.map(event => (
                        <Col
                            className="heroes-column"
                            md={4}
                        >
                            <Card key={event.id}>
                                <Card.Img src={`${event.thumbnail.path}.${event.thumbnail.extension}`} />
                                <Card.Body>
                                    <Card.Title>{event.title}</Card.Title>
                                    <br></br>
                                    <Button
                                        onClick={() => handleShow(event.id)}
                                    >
                                        Learn More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )) : "No events available"}
                </Row>
            </div>
            {event.map(data => (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{data.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {data.description ? data.description : "No description available"}
                        <br></br><br></br>
                        <h6>Characters</h6>
                        <ul>
                            {data.characters.items.length > 0 ? data.characters.items.map(character => (
                                <li>{character.name}</li>
                            )) : "No characters available"}
                        </ul>
                        <h6>Creators</h6>
                        <ul>
                            {data.creators.items.length > 0 ? data.creators.items.map(creator => (
                                <li>{creator.name}, {creator.role}</li>
                            )) : "No creators available"}
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            ))}
        </Container>
    )
}