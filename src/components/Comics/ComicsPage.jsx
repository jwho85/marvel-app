import React, { useState, useEffect, useRef } from "react";
import { fetchComics, fetchComicsByComicID } from '../../utils/utils';
import { Container, Row, Col, Card, CardHeader, CardImg, Button, Modal } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

export default function ComicsPage() {

    const [comicName, setComicName] = useState("");
    const [comics, setComics] = useState([]);
    const [comic, setComic] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const buttonNameRef = useRef();

    useEffect(() => {
        const comicName = localStorage.getItem('comicName');
        setComicName(comicName);
        handleClick(comicName);
    }, []);

    const handleShow = async (comicID) => {
        setShow(true);
        try {
            let data = await fetchComicsByComicID(comicID);
            setComic(data.data.results);
        } catch (err) {
            return err;
        }
    }

    const handleClick = async (comicName) => {
        try {
            let data = await fetchComics(comicName);
            setComics(data.data.results);
            localStorage.setItem('comicName', comicName);
        } catch (err) {
            return err;
        }
    }

    let randomKey = Math.random() * 1000;

    return (
        <Container className="homepage-container">
            <div>
                <div>
                    <h3>Search for your favorite Marvel comics!</h3>
                    <br></br>
                    <input
                        className="search-input"
                        type="text"
                        value={comicName}
                        onChange={(e) => setComicName(e.target.value)}
                    ></input>
                    <Button
                        ref={buttonNameRef}
                        onClick={() => handleClick(comicName)}
                    >
                        Search Comics
                    </Button>
                </div>
                <Row className="heroes-row">
                    {comics.length > 0 ? comics.map(comic => (
                        <Col
                            className="heroes-column"
                            md={4}
                        >
                            <Card key={comic.id}>
                                <Card.Img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
                                <Card.Body>
                                    <Card.Title>{comic.title}</Card.Title>
                                    <br></br>
                                    <Button
                                        onClick={() => handleShow(comic.id)}
                                    >
                                        Learn More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )) : "Please search for a comic"}
                </Row>
            </div>
            {comic.map(data => (
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