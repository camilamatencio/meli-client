import React from 'react';
import ResultsItems from '../ResultsItems/ResultsItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import NotFound from '../NotFound/NotFound';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            categories: []
        }
    }

    componentDidMount() {
        const splitSearch = window.location.search.split('=');
        const query = splitSearch[1];
        axios.get(`http://localhost:9000/api/items?q=${query}`)
        .then(response => {
            this.setState({
                items: response.data.items,
                categories: response.data.categories
            });
        })
    }

    render () {
        const items = this.state.items.map(item => {
            return <ResultsItems key={item.id} item={item} />;
        })
        const categories = this.state.categories.map(category => {
            return <Breadcrumbs key={category.id} name={category.name} />
        })
        return (
            <Container>
                <Container className="breadcrumbs__container">
                <ul className="breadcrumbs__ul">
                    {categories}
                    {this.state.items.length === 0 ? <NotFound /> : ""}
                </ul>
                </Container>
                <Container className="results__container">
                    {items}  
                </Container>                
            </Container>
        );
    };
};

export default Results;