import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ShelMark from './ShelMark';
import Error from './component/error/Error';
import {Helmet} from 'react-helmet';
function App() {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ShelMark-Admin</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Switch>
        <Route path="/" component={ShelMark}/>
      </Switch>
    </Router>
  );
}

export default App;
