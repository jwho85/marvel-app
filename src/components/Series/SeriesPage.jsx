import React, { useState, useEffect, useRef } from "react";
import { fetchSeries, fetchSeriesBySeriesID } from '../../utils/utils';
import { Container, Row, Col, Card, CardHeader, CardImg, Button, Modal } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

export default function ComicsPage() {

    const [seriesName, setSeriesName] = useState("");
    const [series, setSeries] = useState([]);
    const [issue, setIssue] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const buttonNameRef = useRef();

    useEffect(() => {
        const seriesName = localStorage.getItem('seriesName');
        setSeriesName(seriesName);
        handleClick(seriesName);
    }, []);

    const handleShow = async (seriesID) => {
        setShow(true);
        try {
            let data = await fetchSeriesBySeriesID(seriesID);
            setIssue(data.data.results);
        } catch (err) {
            return err;
        }
    }

    const handleClick = async (seriesName) => {
        try {
            let data = await fetchSeries(seriesName);
            setSeries(data.data.results);
            localStorage.setItem('seriesName', seriesName);
        } catch (err) {
            return err;
        }
    }

    let randomKey = Math.random() * 1000;

    return (
        <Container className="homepage-container">
            <div>
                <div>
                    <h3>Search for your favorite Marvel series!</h3>
                    <br></br>
                    <input
                        className="search-input"
                        type="text"
                        value={seriesName}
                        onChange={(e) => setSeriesName(e.target.value)}
                    ></input>
                    <Button
                        ref={buttonNameRef}
                        onClick={() => handleClick(seriesName)}
                    >
                        Search Series
                    </Button>
                </div>
                <Row className="heroes-row">
                    {series.length > 0 ? series.map(issue => (
                        <Col
                            className="heroes-column"
                            md={4}
                        >
                            <Card key={issue.id}>
                                <Card.Img src={`${issue.thumbnail.path}.${issue.thumbnail.extension}`} />
                                <Card.Body>
                                    <Card.Title>{issue.title}</Card.Title>
                                    <br></br>
                                    <Button
                                        onClick={() => handleShow(issue.id)}
                                    >
                                        Learn More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )) : "No comics available"}
                </Row>
            </div>
            {issue.map(data => (
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