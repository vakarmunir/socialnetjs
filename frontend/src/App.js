import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route , Redirect , Switch , withRouter } from 'react-router-dom';
import {Row , Col } from 'react-bootstrap';
import Login from './pages/Login';
import Register from './pages/Register';
import Index from './pages/Index';
import AppHeader from './containers/AppHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import People from './containers/People';

class App extends Component {  
  render() {

    let routes = (
      <Switch>
        <Route path="/login" render={props => !this.props.user.isAuthenticated ? <Login/> : <Redirect to="/" />} />
        <Route path="/register" render={props => !this.props.user.isAuthenticated ? <Register /> : <Redirect to="/" />} />
        <Route exact path="/" component={Index} />                                        
      </Switch>
    );

    return (
      <div className="container">
        <Row>
        <Col xs={12} md={12}>
          <AppHeader />
        </Col>          
        </Row>        
        <Row>          
          <Col xs={12} md={8}>
            {routes}
          </Col>
          <Col xs={12} md={4}>
            <People />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user : state.user
  }
}

export default withRouter(connect(mapStateToProps)(App));
