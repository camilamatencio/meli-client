import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ejemplo1 from '../../assets/ejemplos/ejemplo1.jpg';

const Product = () => {
    return (
        <Container className="product__container">
            <Row className="product__row1">
                <Col className="product__col1"  md={9}>
                    <img className="product__image" src={ejemplo1} alt=""/>
                </Col>
                <Col className="product__col2"  md={3}>
                    <p className="product__p">Nuevo - 234 vendidos</p>
                    <h1 className="product__title"><strong>Deco Reverse Sombrero Oxford</strong></h1>
                    <h2 className="product__price">$ 1.980</h2>
                    <button className="product__button">Comprar</button>
                </Col>
            </Row>
            <Row className="product__row2">
                <Col className="product__col3" md={9}>
                <h2 className="product__title2">Descripción del producto</h2>
                <p className="product__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Unde laudantium ad corrupti deleniti suscipit architecto quisquam error. 
                    Saepe animi ab quos et. Minus illo nemo iste in, commodi dicta ut!.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Unde laudantium ad corrupti deleniti suscipit architecto quisquam error. 
                    Saepe animi ab quos et. Minus illo nemo iste in, commodi dicta ut!</p>                
                </Col>
            </Row>            
        </Container>

    );
};

export default Product;