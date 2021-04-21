import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import Product from './components/Product/Product'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse:"" };
  }

  render() {
    return (
      <div className="App">
        <Route path='/' component={Search} />
        <Route path='/items' exact component={Results} />
        <Route path='/items/:id' exact component={Product} />
      </div>
    );
  }
}

export default App;
