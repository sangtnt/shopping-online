import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signup from './component/auth-form/Signup';
import Signin from './component/auth-form/Signin';
import ShelMark from './ShelMark';
import {Helmet} from "react-helmet";
function App() {
  return (
    <Router>
        <Helmet>
          <meta charSet="utf-8" />
          <title>ShelMark</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      <Switch>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/" component={ShelMark}/>
      </Switch>
    </Router>
  );
}

export default App;
