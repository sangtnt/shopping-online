import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Signup from './component/auth-form/Signup';
import Signin from './component/auth-form/Signin';
import Error from './component/error/Error';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/error" component={Error}/>
        <Redirect to="/error"/>
      </Switch>
    </Router>
  );
}

export default App;
