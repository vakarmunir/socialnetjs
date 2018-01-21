import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import {Navbar , Nav , NavItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Auth from '../core/Auth';
import * as actions from '../store/actions/index';
import axios from 'axios';
import * as config from '../config/config';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class AppHeader extends Component {
    logout(e){                
        e.preventDefault();
        axios.delete(`${config.API_HOST}/user/me/token`).then(res => {            
            let auth = new Auth();
            auth.setAuthorization(false);            
            localStorage.removeItem('jwtToken');
            this.props.logout();
        })
        .catch(err => {
            console.log('err on logout == ' , err);
        });                       
    }
    render() {
        
        let navItems = (
            <Nav pullRight>
                <LinkContainer exact to="/">
                    <NavItem>Home</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                </LinkContainer>                    
                <LinkContainer to="/register">
                    <NavItem>Register</NavItem>
                </LinkContainer>
            </Nav>
        );
        if(this.props.user.isAuthenticated){
            navItems = (
                <Nav pullRight>
                    <NavItem>Welcome! {this.props.user.profile.email}</NavItem>
                    <LinkContainer exact to="/">
                        <NavItem>Home</NavItem>
                    </LinkContainer>                
                    <NavItem onClick={ (e) => {this.logout(e)} }>Logout</NavItem>
                </Nav>
            );
        }

        return (
            <div className="AppHeader">
                <Navbar inverse fluid={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            ForumJS
                        </Navbar.Brand>
                        <Navbar.Toggle />                        
                    </Navbar.Header>                    
                    <Navbar.Collapse>                        
                        {navItems}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: (user) => dispatch( actions.logout() )      
    }
};
const mapStateToProps = state => {
    return {
      user: state.user
    };
  };  
export default withRouter(connect(mapStateToProps , mapDispatchToProps)(AppHeader));