import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Breadcrumbs extends React.Component {
    render () {
        return (
            <Container className="breadcrumbs__container">
                <Row>
                    <Col>
                        <ul className="breadcrumbs__ul">
                            <li className="breadcrumbs__li">Electronica, audio y video</li>
                            <li className="breadcrumbs__li">Iphone</li>
                            <li className="breadcrumbs__li">Celulares</li>
                            <li className="breadcrumbs__li">32 GB</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default Breadcrumbs;