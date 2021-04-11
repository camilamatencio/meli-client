import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ejemplo1 from '../../assets/ejemplos/ejemplo1.jpg';

const Results = () => {
    return (
            <Row className="results__row">
                <Col className="results__col1" xs= "auto">
                    <img className="results__image" src={ejemplo1} alt=""/>
                </Col>
                <Col className="results__col2">
                    <h2 className="results__price">$ 35.800</h2>
                    <h3 className="results__detail">Motorola E3 32gb Negro Nuevo</h3>
                    <h3 className="results__detail">Completo Unico!</h3>
                </Col>
                <Col className="results__col3" md={3}>
                    <h4 className="results__city">Capital Federal</h4>
                </Col>
            </Row>
    );
};

export default Results;