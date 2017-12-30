import React, { Component } from 'react';
import {Grid , Row , Col , Alert , Nav , NavItem , Form, FormGroup, ControlLabel, FormControl, Button , Well, HelpBlock} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import * as axios from 'axios';
import * as config from '../config/config';
import LoginHelper from '../core/LoginHelper';
import Auth from '../core/Auth';

class Forum extends Component {
    render() {
        return (
            <div className="Forum">
                <Row>
                    <Col xs={4} md={4}>
                        thread......
                    </Col>
                </Row>
            </div>    
        );        
    }      
}

export default Forum;