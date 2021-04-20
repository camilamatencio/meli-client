import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Breadcrumbs extends React.Component {
    render () {
        return (
            <li className="breadcrumbs__li">{this.props.name}</li>
        );
    };
};

export default Breadcrumbs;