import React, {Component} from 'react';
import {Row, Col, Panel} from 'react-bootstrap';

class Activity extends Component{

    render(){
        return(
            <div>
                <Panel>
                    <Row>
                        <Col xs={12} md={12}>{this.props.userDisplayName} {this.props.action} at {this.props.publishedAt}</Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>{this.props.content}</Col>
                    </Row>
                </Panel>
            </div>
        );
    }
}

export default Activity;