import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router, Switch, NavLink} from 'react-router-dom'
import App from './App';
import Login from './components/Login'
import Registration from './components/Registration'
import Welcome from './components/Welcome'
import Notfound from './components/Notfound'
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div className="main">
    <div className="navbar">
      <span className="name">Gigeco</span>
      <div className="links">
      <NavLink exact to="/" activeClassName="active-link" className="link">Home</NavLink>
      <NavLink exact to="/login" activeClassName="active-link" className="link">Login</NavLink>
      <NavLink exact to="/registration" activeClassName="active-link" className="link">Registration</NavLink>
      </div>
    </div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="/welcome" component={Welcome} />
      <Route component={Notfound} />
    </Switch>
    </div>
  </Router>
)

ReactDOM.render( routing, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
