import React from 'react';
import Home from "./Home";
import Menu from './component/menu/Menu';
import ProDetail from './component/product/ProDetail';
import ProByCat from './component/category/ProByCat';
import ProductSearch from './component/search/ProductSearch';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Error from './component/error/Error';
import Footer from './component/footer/Footer';
function ShelMark(){
    return(
        <Router>
            <Route path="/" component={Menu}/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/search" component={ProductSearch}/>
                <Route exact path="/category/probycategory/:catId" component={ProByCat}/>
                <Route exact path="/product/:proId" component={ProDetail}/>
                <Route path="/error" component={Error}/>
                <Redirect to="/error"/>
            </Switch>   
            <Route path="/" component={Footer}/>
        </Router>
    )
}
export default ShelMark;