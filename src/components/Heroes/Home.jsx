import React, { useState, useEffect, useRef } from "react";
import { fetchCharacters, fetchCharactersByCharacterID } from '../../utils/utils';
import { Container, Row, Col, Card, CardHeader, CardImg, Button, Modal } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {

    let { hName } = useParams();
    let navigate = useNavigate();

    const [heroName, setHeroName] = useState("");
    const [heroes, setHeroes] = useState([]);
    const [hero, setHero] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const buttonNameRef = useRef();

    useEffect(() => {
        localStorage.setItem('heroName', hName);
        const heroName = localStorage.getItem('heroName');
        setHeroName(heroName);
        handleClick(heroName);
    }, []);

    const handleShow = async (heroID) => {
        setShow(true);
        try {
            let data = await fetchCharactersByCharacterID(heroID);
            setHero(data.data.results);
        } catch (err) {
            return err;
        }
    }

    const handleClick = async (heroName) => {
        try {
            let data = await fetchCharacters(heroName);
            setHeroes(data.data.results);
            localStorage.setItem('heroName', heroName);
            navigate(`/${heroName}`);
        } catch (err) {
            return err;
        }
    }

    let randomKey = Math.random() * 1000;

    return (
        <Container className="homepage-container">
            <div>
                <div>
                    <h3>Search for your favorite Marvel character!</h3>
                    <br></br>
                    <input
                        className="search-input"
                        type="text"
                        value={heroName}
                        onChange={(e) => setHeroName(e.target.value)}
                    ></input>
                    <Button
                        ref={buttonNameRef}
                        onClick={() => handleClick(heroName)}
                    >
                        Search Heroes
                    </Button>
                </div>
                <Row className="heroes-row">
                    {heroes.length > 0 ? heroes.map(hero => (
                        <Col
                            className="heroes-column"
                            md={4}
                        >
                            <Card key={randomKey}>
                                <Card.Img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
                                <Card.Body>
                                    <Card.Title>{hero.name}</Card.Title>
                                    <br></br>
                                    <Button
                                        onClick={() => handleShow(hero.id)}
                                    >
                                        Description ({hero.description.length > 0 ? "1" : "0"})
                                    </Button>
                                    <Link to={"/characters/" + hero.id + "/comics/"}>
                                        <Button>
                                            Comics ({hero.comics.items.length})
                                        </Button>
                                    </Link>
                                    <Link to={"/characters/" + hero.id + "/events/"}>
                                        <Button>
                                            Events ({hero.events.items.length})
                                        </Button>
                                    </Link>
                                    <Link to={"/characters/" + hero.id + "/series/"}>
                                        <Button>
                                            Series ({hero.series.items.length})
                                        </Button>
                                    </Link>
                                    <Link to={"/characters/" + hero.id + "/stories/"}>
                                        <Button>
                                            Stories ({hero.stories.items.length})
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )) : "No heroes available"}
                </Row>
            </div>
            {hero.map(data => (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{data.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {data.description ? data.description : "No description available"}
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