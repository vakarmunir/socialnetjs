import React, { Component } from 'react';
import { Route , Redirect , Switch } from 'react-router-dom';
import {Grid , Row , Col , Alert , Nav , NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Index from './pages/Index';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Row>
          <Col xs={12} md={12}>                            
            <Nav bsStyle="pills">                    
              <LinkContainer to="/">
                <NavItem>Home</NavItem>
              </LinkContainer>
              {/*<LinkContainer to="/forum">
                <NavItem>Forum</NavItem>
                </LinkContainer>*/}                    
            </Nav>                              
          </Col>                
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Switch>
              <Route path="/" exact component={Index} />                  
            </Switch>
          </Col>
        </Row>


      </div>
    );
  }
}

export default App;
