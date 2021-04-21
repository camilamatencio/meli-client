import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ic_shipping from '../../assets/ic_shipping.png'

class ResultsItems extends React.Component {

    render () {
        return (
            <Row className="results__row">
                <Col className="results__col1" xs= "auto">
                    <Link className="results__link" to={`/items/${this.props.item.id}`}><img className="results__image" src={this.props.item.picture} alt={this.props.item.title}/></Link>
                </Col>
                <Col className="results__col2">
                    <h2 className="results__price">$ {this.props.item.price.amount}{this.props.item.free_shipping ? <img className="shipping__image" src={ic_shipping} alt="Envio Gratis"/> : ''}</h2>
                    <Link className="results__link" to={`/items/${this.props.item.id}`}><h3 className="results__detail">{this.props.item.title}</h3></Link>
                </Col>
                <Col className="results__col3" md={3}>
                    <h4 className="results__city">{this.props.item.city}</h4>
                </Col>
            </Row>                
        );
    };
};

export default ResultsItems;