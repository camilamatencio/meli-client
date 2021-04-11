import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logoML from '../../assets/Logo_ML.png';
import ic_Search from '../../assets/ic_Search.png';

const Search = () => {
    return (
        <nav className="nav__search">
            <Container>
                <Row>
                    <Col xs={2} md={1}>
                        <img className="search__logo" src={logoML} alt=""/>
                    </Col>
                    <Col xs={10} md={11}>
                        <input className="search__box" type="search" placeholder="Nunca dejes de buscar"/>
                        <button className="search__button" type="submit"><img src={ic_Search}></img></button>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
};

export default Search;