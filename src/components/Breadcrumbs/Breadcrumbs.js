import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Breadcrumbs extends React.Component {
    render () {
        return (
            <li className="breadcrumbs__li">{this.props.name}</li>
        );
    };
};

export default Breadcrumbs;