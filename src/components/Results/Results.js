import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ejemplo1 from '../../assets/ejemplos/ejemplo1.jpg';

class Results extends React.Component {
    render () {
        return (
            
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
            
        );
    };
};

export default Results;