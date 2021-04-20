import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
            price: {}
        }
    }

    componentDidMount() {
        const splitPath = window.location.pathname.split('/');
        const id = splitPath[2];
        axios.get(`http://localhost:9000/api/items/${id}`)
        .then(response => {
            this.setState({
                item: response.data.item,
                price: response.data.item.price
            });
            console.log(response)
        })
    }

    render () {
        return (
            <Container className="product__container">
                <Row className="product__row1">
                    <Col className="product__col1"  md={9}>
                        <img className="product__image" src={this.state.item.picture} alt=""/>
                    </Col>
                    <Col className="product__col2"  md={3}>
                        <p className="product__p">{this.state.item.condition} - {this.state.item.sold_quantity} vendidos</p>
                        <h1 className="product__title"><strong>{this.state.item.title}</strong></h1>
                        <h2 className="product__price">$ {this.state.price.amount}</h2>
                        <button className="product__button">Comprar</button>
                    </Col>
                </Row>
                <Row className="product__row2">
                    <Col className="product__col3" md={9}>
                    <h2 className="product__title2">Descripción del producto</h2>
                    <p className="product__description">{this.state.item.description}</p>                
                    </Col>
                </Row>            
            </Container>
        );        
    };
};

export default Product;