import React, { useState, useEffect, useRef } from "react";
import { fetchStories, fetchStoriesByStoryID } from '../../utils/utils';
import { Container, Row, Col, Card, CardHeader, CardImg, Button, Modal } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

export default function ComicsPage() {

    const [storyName, setStoryName] = useState("");
    const [stories, setStories] = useState([]);
    const [story, setStory] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const buttonNameRef = useRef();

    useEffect(() => {
        const storyName = localStorage.getItem('storyName');
        setStoryName(storyName);
        handleClick(storyName);
    }, []);

    const handleShow = async (storyID) => {
        setShow(true);
        try {
            let data = await fetchStoriesByStoryID(storyID);
            setStory(data.data.results);
        } catch (err) {
            return err;
        }
    }

    const handleClick = async (storyName) => {
        try {
            let data = await fetchStories(storyName);
            setStories(data.data.results);
            localStorage.setItem('storyName', storyName);
        } catch (err) {
            return err;
        }
    }

    let randomKey = Math.random() * 1000;

    return (
        <Container className="homepage-container">
            <div>
                <div>
                    <h3>Search for your favorite Marvel stories!</h3>
                    <br></br>
                    <input
                        className="search-input"
                        type="text"
                        value={storyName}
                        onChange={(e) => setStoryName(e.target.value)}
                    ></input>
                    <Button
                        ref={buttonNameRef}
                        onClick={() => handleClick(storyName)}
                    >
                        Search Stories
                    </Button>
                </div>
                <Row className="heroes-row">
                    {stories.length > 0 ? stories.map(story => (
                        <Col
                            className="heroes-column"
                            md={4}
                        >
                            <Card key={story.id}>
                                <Card.Img src={`${story.thumbnail.path}.${story.thumbnail.extension}`} />
                                <Card.Body>
                                    <Card.Title>{story.title}</Card.Title>
                                    <br></br>
                                    <Button
                                        onClick={() => handleShow(story.id)}
                                    >
                                        Learn More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )) : "Please search for a story"}
                </Row>
            </div>
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
                                <Link to={"/" + character.name}>
                                    <li>{character.name}</li>
                                </Link>
                            )) : "No characters available"}
                        </ul>
                        <h6>Creators</h6>
                        <ul>
                            {data.creators.items.length > 0 ? data.creators.items.map(creator => (
                                <Link to={"/creators/" + creator.name}>
                                    <li>{creator.name}, {creator.role}</li>
                                </Link>
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