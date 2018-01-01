import React, { Component } from 'react';
import { Route , Redirect , Switch } from 'react-router-dom';
import {Grid , Row , Col , Alert , Nav , NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Login from './pages/Login';
import Register from './pages/Register';
import Forum from './pages/Forum';
import AppHeader from './containers/AppHeader';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="container">

        <Row>
        <Col xs={12} md={12}>
          <AppHeader />
        </Col>          
        </Row>        
        <Row>
          <Col xs={12} md={12}>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/" component={Forum} />                                
            </Switch>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
