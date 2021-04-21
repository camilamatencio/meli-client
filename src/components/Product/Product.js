import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
            price: {},
            categories: []
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
            axios.get(`https://api.mercadolibre.com/categories/${response.data.item.category}`)
            .then(response => {
                this.setState({
                    categories: response.data.path_from_root
                })
            })
        })

    }

    render () {
        const categories = this.state.categories.map(category => {
            return <Breadcrumbs key={category.id} name={category.name} />
        })
        return (
            <Container>
                <Container className="breadcrumbs__container">
                <ul className="breadcrumbs__ul">
                    {categories}
                </ul>
                </Container>
                <Container className="product__container">
                    <Row className="product__row1">
                        <Col className="product__col1"  md={9}>
                            <img className="product__image" src={this.state.item.picture} alt={this.state.item.title}/>
                        </Col>
                        <Col className="product__col2"  md={3}>
                            <p className="product__p">{this.state.item.condition === 'new' ? 'Nuevo' : 'Usado'} - {this.state.item.sold_quantity} vendidos</p>
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
            </Container>
        );        
    };
};

export default Product;