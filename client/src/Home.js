import React from 'react';
import {Container} from 'react-bootstrap';
import SalePart from './component/carousel/SalePart';
import Category from './component/category/Category';
import { Route } from 'react-router-dom';
import NewProduct from './component/product/NewProduct';
import FlashSold from './component/product/FlashSold';
import BestRating from './component/product/BestRating';
function Home() {
  return (
    <div>
        <Container className="shelter-container" fluid>
            <SalePart/>
        </Container>
        <Container fluid className="main-body">
          <Route path="/" component={Category}/>
          <Route path="/" component={NewProduct}/>
          <Route path="/" component={FlashSold}/>
          <Route path="/" component={BestRating}/>
        </Container>
        <Container fluid>
        </Container>
    </div>
  );
}
export default Home;