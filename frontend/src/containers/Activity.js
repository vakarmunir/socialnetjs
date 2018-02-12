import React, {Component} from 'react';
import {Row, Col, Panel} from 'react-bootstrap';

class Activity extends Component{

    render(){
        return(
            <div>
                <Panel>
                    <Row>
                        <Col xs={12} md={12}>Some post at 64:4:00</Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>sdfsfdsfsfsfsfsdfsfs</Col>
                    </Row>
                </Panel>
            </div>
        );
    }
}

export default Activity;