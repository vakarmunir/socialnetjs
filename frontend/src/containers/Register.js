import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Row , Col , messageBox , FormGroup, ControlLabel, FormControl, Button , Well} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import * as axios from 'axios';
import * as config from '../config/config';
import RegisterHelper from '../core/RegisterHelper';
import Auth from '../core/Auth';
import * as actions from '../store/actions/index';
import MessagesBox from '../components/MessagesBox';

class Register extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      email : {value : '' , validationState : null},
      password : {value : '' , validationState : null},            
    }

    var registerHelper = new RegisterHelper();    
    this.handleEmailText = registerHelper.emailTextFieldHandler;
    this.handlePasswordText = registerHelper.passwordTextFieldHandler;    
  }

  componentDidMount(){
    
  }

  async register(){
    this.props.register( { email: {...this.state.email} , password : {...this.state.password}} );    
  }

  render() {    
    
    let messageBox = null;
    if(this.props.user.data.message.type) {      
      messageBox = <MessagesBox messages={this.props.user.data.message.messages} type={this.props.user.data.message.type} />
    }

    let isRegisterBtnDisabled = this.props.authInProcess;

    return (
      <div className="Register">        
        <Row>
          <Col xs={4} md={4}>
            <Well bsSize="large">
              {messageBox}
              <form>                                
                <FormGroup controlId="email" validationState={this.props.user.data.email.validationState}>
                  <ControlLabel>Email</ControlLabel>
                  <FormControl type="text" value={this.state.email.value} placeholder="Enter Email" onChange={this.handleEmailText.bind(this)} />
                  <FormControl.Feedback />                  
                </FormGroup>
                <FormGroup controlId="password" validationState={this.props.user.data.password.validationState}>
                  <ControlLabel>Password</ControlLabel>
                  <FormControl type="password" value={this.state.password.value} placeholder="Enter Password" onChange={this.handlePasswordText.bind(this)} />
                  <FormControl.Feedback />                  
                </FormGroup>
                <FormGroup controlId="register">
                  <Button bsStyle="primary" onClick={this.register.bind(this)} disabled={isRegisterBtnDisabled}>Register</Button>
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
      register: (user) => dispatch( actions.register(user) )      
  }
};

const mapStateToProps = state => {
  return {
    user: state.user,
    authInProcess : state.user.authInProcess
  };
};
export default connect(mapStateToProps , mapDispatchToProps) (Register);