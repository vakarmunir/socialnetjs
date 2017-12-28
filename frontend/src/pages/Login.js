import React, { Component } from 'react';
import {Grid , Row , Col , Alert , Nav , NavItem , Form, FormGroup, ControlLabel, FormControl, Button , Well, HelpBlock} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import * as axios from 'axios';
import * as config from '../config/config';

class Login extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      email : {value : '' , validationState : null},
      password : {value : '' , validationState : null},      
      message: { type : null, class : null, messages : [] }
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

  async login(){
    try{
      var res = await axios.post(`${config.API_HOST}/user/login`,{ email: this.state.email.value , password : this.state.password.value} );
      console.log('res ======== ' , res);
    }catch(e){
      let res = e.response.data;
      let email = res.email;
      let password = res.password;            
      let message = {...this.state.message};
      message.type = 'error';
      message.class = 'danger';      
      message.messages = res.messages;      
      this.setState({email , password , message});
    }
  }

  render() {    
    
    let alert = null;
    if(this.state.message.type) {      
      let alertMessages = this.state.message.messages.map( (msg , i) => <p key={i}>{msg}</p> );
      alert = <Alert bsStyle={this.state.message.class}>{alertMessages}</Alert>
    }

    return (
      <div className="Login">
        <Row>
          <Col xs={4} md={4}>
            <Well bsSize="large">
              {alert}
              <form>                                
                <FormGroup controlId="email" validationState={this.state.email.validationState}>
                  <ControlLabel>Email</ControlLabel>
                  <FormControl type="text" value={this.state.email.value} placeholder="Enter Email" onChange={this.emailTextFieldHandler.bind(this)} />
                  <FormControl.Feedback />                  
                </FormGroup>
                <FormGroup controlId="password" validationState={this.state.password.validationState}>
                  <ControlLabel>Password</ControlLabel>
                  <FormControl type="password" value={this.state.password.value} placeholder="Enter Password" onChange={this.passwordFieldHandler.bind(this)} />
                  <FormControl.Feedback />                  
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
