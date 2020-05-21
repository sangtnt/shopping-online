import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './component/Home';
import Menu from './component/menu/Menu';
import Category from './component/category/Category';
import Products from './component/product/Products';
import ProSearch from './component/search/ProSearch';
function ShelMark(){
    return(
        <Router>
            <Route path="/" component={Menu}/>
            <Switch>
                <Route path="/products/search" component={ProSearch}/>
                <Route path="/products" component={Products}/>
                <Route path="/category" component={Category}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    )
}
export default ShelMark;