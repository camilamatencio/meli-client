import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ejemplo1 from '../../assets/ejemplos/ejemplo1.jpg';
import axios from 'axios';

class Results extends React.Component {

      componentDidMount() {
        const splitSearch = window.location.search.split('=')
        const query = splitSearch[1];
        axios.get(`http://localhost:9000/api/items?q=${query}`)
        .then(response => {
            console.log(response)
        })
      }

    render () {
        return (
            <Container className="results__container">
                <Row className="results__row">
                    <Col className="results__col1" xs= "auto">
                        <Link className="results__link" to='/items/:id'><img className="results__image" src={ejemplo1} alt=""/></Link>
                    </Col>
                    <Col className="results__col2">
                        <h2 className="results__price">$ 35.800</h2>
                        <Link className="results__link" to='/items/:id'><h3 className="results__detail">Motorola E3 32gb Negro Nuevo</h3></Link>
                        <h3 className="results__detail">Completo Unico!</h3>
                    </Col>
                    <Col className="results__col3" md={3}>
                        <h4 className="results__city">Capital Federal</h4>
                    </Col>
                </Row>                
                <Row className="results__row">
                    <Col className="results__col1" xs= "auto">
                        <Link className="results__link" to='/items/:id'><img className="results__image" src={ejemplo1} alt=""/></Link>
                    </Col>
                    <Col className="results__col2">
                        <h2 className="results__price">$ 35.800</h2>
                        <Link className="results__link" to='/items/:id'><h3 className="results__detail">Motorola E3 32gb Negro Nuevo</h3></Link>
                        <h3 className="results__detail">Completo Unico!</h3>
                    </Col>
                    <Col className="results__col3" md={3}>
                        <h4 className="results__city">Capital Federal</h4>
                    </Col>
                </Row>     
                <Row className="results__row">
                    <Col className="results__col1" xs= "auto">
                        <Link className="results__link" to='/items/:id'><img className="results__image" src={ejemplo1} alt=""/></Link>
                    </Col>
                    <Col className="results__col2">
                        <h2 className="results__price">$ 35.800</h2>
                        <Link className="results__link" to='/items/:id'><h3 className="results__detail">Motorola E3 32gb Negro Nuevo</h3></Link>
                        <h3 className="results__detail">Completo Unico!</h3>
                    </Col>
                    <Col className="results__col3" md={3}>
                        <h4 className="results__city">Capital Federal</h4>
                    </Col>
                </Row>    
                <Row className="results__row">
                    <Col className="results__col1" xs= "auto">
                        <Link className="results__link" to='/items/:id'><img className="results__image" src={ejemplo1} alt=""/></Link>
                    </Col>
                    <Col className="results__col2">
                        <h2 className="results__price">$ 35.800</h2>
                        <Link className="results__link" to='/items/:id'><h3 className="results__detail">Motorola E3 32gb Negro Nuevo</h3></Link>
                        <h3 className="results__detail">Completo Unico!</h3>
                    </Col>
                    <Col className="results__col3" md={3}>
                        <h4 className="results__city">Capital Federal</h4>
                    </Col>
                </Row>    
            </Container>

        );
    };
};

export default Results;