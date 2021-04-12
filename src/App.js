import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './styles/app.scss';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import Product from './components/Product/Product';

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
        <Search />
        {/* 
        <Container className="results__container">
          <Results />
          <Results />
          <Results />
          <Results />        
        </Container>
        */}
        <Product />
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
