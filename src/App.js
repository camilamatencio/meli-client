import React from 'react';
import { Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './styles/app.scss';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import Product from './components/Product/Product'; 
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'; 
import NotFound from './components/NotFound/NotFound'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse:"" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }


  render() {
    return (
      <div className="App">
        <Route path='/' component={Search} />
        <Route path='/items' exact component={Results} />
        <Route path='/items/:id' exact component={Product} />
        <Route path='/not_found' exact component={NotFound}/>
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
