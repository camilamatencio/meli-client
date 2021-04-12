import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './styles/app.scss';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import Product from './components/Product/Product';


function App() {
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
    </div>
  );
}

export default App;
