import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Row , Col , Alert , FormGroup, ControlLabel, FormControl, Button , Well} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import * as axios from 'axios';
import * as config from '../config/config';
import RegisterHelper from '../core/RegisterHelper';
import Auth from '../core/Auth';
import * as actionTypes from '../store/actions';

class Register extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      email : {value : '' , validationState : null},
      password : {value : '' , validationState : null},      
      message: { type : null, class : null, messages : [] }
    }

    var registerHelper = new RegisterHelper();
    this.handleRegisterException = registerHelper.registerExpectionHandler.bind(this);
    this.handleEmailText = registerHelper.emailTextFieldHandler;
    this.handlePasswordText = registerHelper.passwordTextFieldHandler;
    //console.log('user ==== ' , this.state);
  }

  componentDidMount(){
    
  }

  async register(){
    try{
      var res = await axios.post(`${config.API_HOST}/user`,{ email: {...this.state.email} , password : {...this.state.password}} );
      /*console.log("res ==== " , res);*/
      localStorage.setItem('jwtToken' , res.headers['x-auth']);
      let auth = new Auth();
      auth.setAuthorization(res.headers['x-auth']);
      this.props.setUser({ isAuthenticated: true, data: {...res.data} });      
    }catch(e){
      this.handleRegisterException(e);                  
    }
  }

  render() {    
        
    let alert = null;
    if(this.state.message.type) {      
      let alertMessages = this.state.message.messages.map( (msg , i) => <p key={i}>{msg}</p> );
      alert = <Alert bsStyle={this.state.message.class}>{alertMessages}</Alert>
    }

    return (
      <div className="Register">        
        <Row>
          <Col xs={4} md={4}>
            <Well bsSize="large">
              {alert}
              <form>                                
                <FormGroup controlId="email" validationState={this.state.email.validationState}>
                  <ControlLabel>Email</ControlLabel>
                  <FormControl type="text" value={this.state.email.value} placeholder="Enter Email" onChange={this.handleEmailText.bind(this)} />
                  <FormControl.Feedback />                  
                </FormGroup>
                <FormGroup controlId="password" validationState={this.state.password.validationState}>
                  <ControlLabel>Password</ControlLabel>
                  <FormControl type="password" value={this.state.password.value} placeholder="Enter Password" onChange={this.handlePasswordText.bind(this)} />
                  <FormControl.Feedback />                  
                </FormGroup>
                <FormGroup controlId="register">
                  <Button bsStyle="primary" onClick={this.register.bind(this)}>Register</Button>                  
                </FormGroup>
              </form>              
            </Well>                                      
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      setUser: (user) => dispatch( {type: actionTypes.SET_USER_AUTH, user} )      
  }
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps , mapDispatchToProps) (Register);
