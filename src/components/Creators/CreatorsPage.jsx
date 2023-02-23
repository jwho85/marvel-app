import React, { useState, useEffect, useRef } from "react";
import { fetchCreators, fetchCreatorsByCreatorID } from '../../utils/utils';
import { Container, Row, Col, Card, CardHeader, CardImg, Button, Modal } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

export default function CreatorsPage() {

    let { cName } = useParams();
    let navigate = useNavigate();

    const [creatorName, setCreatorName] = useState("");
    const [creators, setCreators] = useState([]);
    const [creator, setCreator] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const buttonNameRef = useRef();

    useEffect(() => {
        localStorage.setItem('creatorName', cName);
        const creatorName = localStorage.getItem('creatorName');
        setCreatorName(creatorName);
        handleClick(creatorName);
    }, []);

    const handleShow = async (creatorID) => {
        setShow(true);
        try {
            let data = await fetchCreatorsByCreatorID(creatorID);
            setCreator(data.data.results);
            console.log(creator);
        } catch (err) {
            return err;
        }
    }

    const handleClick = async (creatorName) => {
        try {
            let data = await fetchCreators(creatorName);
            setCreators(data.data.results);
            localStorage.setItem('creatorName', creatorName);
            navigate(`/creators/${creatorName}`);
        } catch (err) {
            return err;
        }
    }

    let randomKey = Math.random() * 1000;

    return (
        <Container className="homepage-container">
            <div>
                <div>
                    <h3>Search for your favorite Marvel creators!</h3>
                    <br></br>
                    <input
                        className="search-input"
                        type="text"
                        value={creatorName}
                        onChange={(e) => setCreatorName(e.target.value)}
                    ></input>
                    <Button
                        ref={buttonNameRef}
                        onClick={() => handleClick(creatorName)}
                    >
                        Search Creators
                    </Button>
                </div>
                <Row className="heroes-row">
                    {creators.length > 0 ? creators.map(creator => (
                        <Col
                            className="heroes-column"
                            md={4}
                        >
                            <Card key={creator.id}>
                                <Card.Img src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`} />
                                <Card.Body>
                                    <Card.Title>{creator.firstName} {creator.lastName}</Card.Title>
                                    <br></br>
                                    <Link to={"/creators/" + creator.id + "/comics/"}>
                                        <Button>
                                            Comics ({creator.comics.items.length})
                                        </Button>
                                    </Link>
                                    <Link to={"/creators/" + creator.id + "/events/"}>
                                        <Button>
                                            Events ({creator.events.items.length})
                                        </Button>
                                    </Link>
                                    <Link to={"/creators/" + creator.id + "/series/"}>
                                        <Button>
                                            Series ({creator.series.items.length})
                                        </Button>
                                    </Link>
                                    <Link to={"/creators/" + creator.id + "/stories/"}>
                                        <Button>
                                            Stories ({creator.stories.items.length})
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )) : "No creators available"}
                </Row>
            </div>
            {/* {creator.map(data => (
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
            ))} */}
        </Container>
    )
}