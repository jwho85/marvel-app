import React, { useState, useEffect } from "react";
import { fetchEventsByCreatorID, fetchEventsByEventID } from '../../utils/utils';
import { Container, Row, Col, Card, CardHeader, CardImg, Button, Modal } from 'react-bootstrap';
import { useParams } from "react-router-dom";

export default function CreatorEvents() {

    let { id } = useParams();

    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetchEventsByCreatorID(id)
            .then((data) => setEvents(data.data.results))
            .catch((err) => console.error(err));
    }, []);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = async (eventID) => {
        setShow(true);
        setEvent([]);
        try {
            let data = await fetchEventsByEventID(eventID);
            setEvent(data.data.results);
        } catch (err) {
            return err;
        }
    }

    let randomKey = Math.random() * 1000;

    return (
        <Container className="homepage-container">
            <Row className="heroes-row">
                {events.length > 0 ? events.map(data => (
                    <Col
                        className="heroes-column"
                        md={4}
                    >
                        <Card key={data.id}>
                            <Card.Img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <br></br>
                                <Button
                                    onClick={() => handleShow(data.id)}
                                >
                                    Learn More
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )) : "No events available"}
            </Row>
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
                                <li key={randomKey}>{character.name}</li>
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