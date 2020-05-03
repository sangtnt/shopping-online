import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Menu from './component/menu/Menu';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Container className="shelter-container" fluid>
        <div className="menu-space"></div>
      <Menu/>
      <div style={{height: "3000px"}}>ads</div>
      </Container>
    </Router>
  );
}

export default App;
