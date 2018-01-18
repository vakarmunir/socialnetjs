import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Row , Col , Alert , FormGroup, ControlLabel, FormControl, Button , Well} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import * as axios from 'axios';
import * as config from '../config/config';
import LoginHelper from '../core/LoginHelper';
import Auth from '../core/Auth';
/*import * as actionTypes from '../store/actions';*/
import * as actions from '../store/actions/index'

class Login extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      email : {value : '' , validationState : null},
      password : {value : '' , validationState : null},      
      message: { type : null, class : null, messages : [] }
    }

    var loginHelper = new LoginHelper();
    this.handleLoginException = loginHelper.loginExpectionHandler.bind(this);
    this.handleEmailText = loginHelper.emailTextFieldHandler;
    this.handlePasswordText = loginHelper.passwordTextFieldHandler;
    //console.log('user ==== ' , this.state);
  }

  componentDidMount(){
    
  }

  async login(){
    try{
      var res = await axios.post(`${config.API_HOST}/user/login`,{ email: {...this.state.email} , password : {...this.state.password}} );
      /*console.log("res ==== " , res);*/
      localStorage.setItem('jwtToken' , res.headers['x-auth']);
      let auth = new Auth();
      auth.setAuthorization(res.headers['x-auth']);
      this.props.login({ isAuthenticated: true, data: {...res.data} });      
    }catch(e){
      this.handleLoginException(e);                  
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
                  <FormControl type="text" value={this.state.email.value} placeholder="Enter Email" onChange={this.handleEmailText.bind(this)} />
                  <FormControl.Feedback />                  
                </FormGroup>
                <FormGroup controlId="password" validationState={this.state.password.validationState}>
                  <ControlLabel>Password</ControlLabel>
                  <FormControl type="password" value={this.state.password.value} placeholder="Enter Password" onChange={this.handlePasswordText.bind(this)} />
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

const mapDispatchToProps = dispatch => {
  return {
      login: (user) => dispatch( actions.login(user) )      
  }
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps , mapDispatchToProps) (Login);
