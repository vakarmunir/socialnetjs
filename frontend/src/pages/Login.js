import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Row , Col } from 'react-bootstrap';
import * as actionTypes from '../store/actions';
import LoginContainer from '../containers/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class Login extends Component {
    render() {
        return (
            <div className="LoignPage">
                <Row>
                    <Col xs={12} md={12}>
                        <LoginContainer />                          
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

export default connect(mapStateToProps , mapDispatchToProps) (Login);