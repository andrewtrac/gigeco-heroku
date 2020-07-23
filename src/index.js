import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import App from './App';
import Login from './components/Login'
import Registration from './components/Registration'
import Welcome from './components/Welcome'
import Notfound from './components/Notfound'
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
      </ul>
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
