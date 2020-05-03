import React from 'react';
import {Container} from 'react-bootstrap';
import Menu from './component/menu/Menu';
import SalePart from './component/carousel/SalePart';
import Category from './component/category/Category';
import { Route } from 'react-router-dom';
function Home() {
  return (
    <div>
        <Container className="shelter-container" fluid>
            <Menu/>
            <SalePart/>
        </Container>
        <Container fluid className="main-body">
            <Route path="/" component={Category}/>
        </Container>
    </div>
  );
}
export default Home;