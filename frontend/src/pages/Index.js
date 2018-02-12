import React, { Component } from 'react';
import {Row , Col , Panel , Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import StatusBox from '../containers/StatusBox';
import Activities from '../containers/Activities';

class Index extends Component {
    render() {
        return (
            <div className="Index">

                <Row>
                    <Col xs={12} md={12}>
                        <StatusBox />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        {<Activities />}
                    </Col>
                </Row>
            </div>    
        );        
    }      
}

export default Index;