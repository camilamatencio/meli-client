import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/app.scss';
import Search from './components/Search/Search';
import Results from './components/Results/Results';


function App() {
  return (
    <div className="App">
      <Search />
      <Container className="results__container">
        <Results />
      </Container>
    </div>
  );
}

export default App;
