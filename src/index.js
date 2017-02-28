import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, hashHistory } from 'react-router';
import Prog from './header/prog/prog.jsx'
import Error from './header/error/error.jsx'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    {/* add the routes here */}
    <Route path="/Programmes" component={Prog}/>
    <Route path="/Error404" component={Error}/>
  </Router>
), document.getElementById('root'))
