import React from 'react';
import {Container} from 'react-bootstrap';
import Menu from './component/menu/Menu';
import SalePart from './component/carousel/SalePart';
import Category from './component/category/Category';
import { Route } from 'react-router-dom';
import {Helmet} from "react-helmet";
import NewProduct from './component/product/NewProduct';
import Footer from './component/footer/Footer';
import FlashSold from './component/product/FlashSold';
import BestRating from './component/product/BestRating';
function Home() {
  return (
    <div>
        <Container className="shelter-container" fluid>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ShelMark</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Menu/>
            <SalePart/>
        </Container>
        <Container fluid className="main-body">
          <Route path="/" component={Category}/>
          <Route path="/" component={NewProduct}/>
          <Route path="/" component={FlashSold}/>
          <Route path="/" component={BestRating}/>
        </Container>
        <Container fluid>
        <Route path="/" component={Footer}/>
        </Container>
    </div>
  );
}
export default Home;