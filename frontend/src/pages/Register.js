import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Grid , Row , Col , Alert , Nav , NavItem , Form, FormGroup, ControlLabel, FormControl, Button , Well, HelpBlock} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import * as axios from 'axios';
import * as config from '../config/config';
import RegisterHelper from '../core/RegisterHelper';
import Auth from '../core/Auth';
import * as actionTypes from '../store/actions';
import { Route , Redirect , Switch } from 'react-router-dom';

import RegisterContainer from '../containers/Register';
class Register extends Component {
    render() {
        return (
            <div className="RegisterPage">
                <Row>
                    <Col xs={12} md={12}>
                        <RegisterContainer />                          
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
  