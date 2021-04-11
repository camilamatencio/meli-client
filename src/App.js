import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/app.scss';
import Search from './components/Search/Search';


function App() {
  return (
    <div className="App">
      <Search />
      <Container>
        
      </Container>
    </div>
  );
}

export default App;
