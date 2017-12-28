import React, { Component } from 'react';
import { Route , Redirect , Switch } from 'react-router-dom';
import {Grid , Row , Col , Alert , Nav , NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Login from './pages/Login';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="container">

        <Row>
        <Col xs={12} md={12}>
          <h2>ForumJS</h2>
        </Col>          
        </Row>
        <Row>
          <Col xs={12} md={12}>                            
            <Nav bsStyle="tabs">
              <LinkContainer to="/login">
                <NavItem>Login</NavItem>
              </LinkContainer>                    
              <LinkContainer to="/register">
                <NavItem>Register</NavItem>
              </LinkContainer>                    
            </Nav>                              
          </Col>                
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Switch>
              <Route path="/login" component={Login} />
              <Redirect from="/" to="/login" />                  
            </Switch>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
