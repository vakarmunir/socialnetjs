import React, { Component } from 'react';
import {Grid , Row , Col , Button , Well, Panel , Table} from 'react-bootstrap';
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
                    <Col xs={12} md={12}>
                        <Panel header="Threads" bsStyle="primary">
                            <Table responsive>
                                <thead>
                                    <tr>                                    
                                        <th>Threads</th>
                                        <th>Views</th>
                                        <th>Author</th>                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>                                    
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>                                    
                                    </tr>
                                    <tr>
                                        <td>Table cell</td>
                                        <td>Table cell</td>                                    
                                        <td>Table cell</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Panel>
                    </Col>
                </Row>
            </div>    
        );        
    }      
}

export default Forum;