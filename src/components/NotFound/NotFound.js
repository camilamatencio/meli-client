import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

class NotFound extends React.Component {

    render () {
        return (
            <Container className="not_found__container">
                <h1>No se ha encontrado el producto ingresado</h1>
            </Container>
        )
    };
};

export default NotFound;