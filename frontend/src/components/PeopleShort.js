import React, {Component} from 'react';
import {Row, Col, Image, Button} from 'react-bootstrap';
import man from '../images/man.png'
import '../styles/PeopleShort.css';

class PeopleShort extends Component
{
    render(){
        return (
            
                <Row className="people-short-row">
                    <Col md={3} md={3}>
                        <center>
                            <Image src={man} circle width="50" />
                        </center>                            
                    </Col>
                    <Col md={4} md={4} className="no-left-padding">
                        <a href="#">{this.props.displayname}</a>
                    </Col>
                    <Col md={5} md={5}>
                        <Button bsStyle="primary">
                            Follow
                        </Button>
                    </Col>
                </Row>                
        )
    }
}

export default PeopleShort;