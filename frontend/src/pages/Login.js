import React, { Component } from 'react';
import {Grid , Row , Col , Alert , Nav , NavItem , Form, FormGroup, ControlLabel, FormControl, Button , Well, HelpBlock} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import * as axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : {
        value : '',
        validationState : null,
        responseMessage: ''
      },
      password : {
        value : '',
        validationState : null,
        responseMessage: ''
      }
    }    
  } 

  emailTextFieldHandler(e) {    
    var email = {...this.state.email};
    email.value = e.target.value;
    this.setState({ email });
  }
  passwordFieldHandler(e) {    
    var password = {...this.state.password};
    password.value = e.target.value;
    this.setState({ password });
  }
  login(){
    axios.post();
  }

  render() {    
    return (
      <div className="Login">
        <Row>
          <Col xs={4} md={4}>
            <Well bsSize="large">
              <form>
                <FormGroup controlId="email" validationState={this.state.email.validationState}>
                  <ControlLabel>Email</ControlLabel>
                  <FormControl type="text" value={this.state.email.value} placeholder="Enter Email" onChange={this.emailTextFieldHandler.bind(this)} />
                  <FormControl.Feedback />
                  <HelpBlock>{this.state.email.responseMessage}</HelpBlock>
                </FormGroup>
                <FormGroup controlId="password" validationState={this.state.password.validationState}>
                  <ControlLabel>Password</ControlLabel>
                  <FormControl type="password" value={this.state.password.value} placeholder="Enter Password" onChange={this.passwordFieldHandler.bind(this)} />
                  <FormControl.Feedback />
                  <HelpBlock>{this.state.password.responseMessage}</HelpBlock>
                </FormGroup>
                <FormGroup controlId="login">
                  <Button bsStyle="primary" onClick={this.login.bind(this)}>Login</Button>                  
                </FormGroup>
              </form>
            </Well>                                      
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
