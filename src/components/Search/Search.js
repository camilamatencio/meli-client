import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logoML from '../../assets/Logo_ML.png';
import ic_Search from '../../assets/ic_Search.png';

class Search extends React.Component {
    render () {
        return (
            <nav className="nav__search">
                <Container>
                    <Row>
                        <Col xs={2} md={1}>
                            <Link to='/'><img className="search__logo" src={logoML} alt=""/></Link>
                        </Col>
                        <Col xs={10} md={11}>
                            <input className="search__box" type="text" placeholder="Nunca dejes de buscar"/>
                            <Link to='/items'><button className="search__button" type="submit"><img src={ic_Search}></img></button></Link>
                        </Col>
                    </Row>
                </Container>
            </nav>
        );
    };
};



export default Search;