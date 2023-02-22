import React, { useState, useEffect } from "react";
import { fetchStoriesByCharacterID, fetchStoriesByStoryID } from '../../utils/utils';
import { Container, Row, Col, Card, CardHeader, CardImg, Button, Modal } from 'react-bootstrap';
import { useParams } from "react-router-dom";

export default function Stories() {

    let { id } = useParams();

    const [stories, setStories] = useState([]);
    const [story, setStory] = useState([]);

    useEffect(() => {
        fetchStoriesByCharacterID(id)
            .then((data) => setStories(data.data.results))
            .catch((err) => console.error(err));
    }, []);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = async (storyID) => {
        setShow(true);
        setStory([]);
        try {
            let data = await fetchStoriesByStoryID(storyID);
            setStory(data.data.results);
        } catch (err) {
            return err;
        }
    }

    let randomKey = Math.random() * 1000;

    return (
        <Container className="homepage-container">
            <Row className="heroes-row">
                {stories.length > 0 ? stories.map(data => (
                    <Col
                        className="heroes-column"
                        md={4}
                    >
                        <Card key={data.id}>
                            {/* <Card.Img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} /> */}
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
                )) : "No stories available"}
            </Row>
            {story.map(data => (
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