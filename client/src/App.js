import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Menu from './component/menu/Menu';
import { BrowserRouter as Router } from 'react-router-dom';
import SalePart from './component/carousel/SalePart';
import Category from './component/category/Category';
function App() {
  return (
    <Router>
      <Container className="shelter-container" fluid>
        <Menu/>
        <SalePart/>
      </Container>
      <Container fluid className="main-body">
            <Category/>
      </Container>
    </Router>
  );
}

export default App;
