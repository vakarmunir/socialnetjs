import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row , Col , Panel, Image , FormGroup , ControlLabel , FormControl , Button , Form} from 'react-bootstrap';
import * as actions from '../store/actions/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import man from '../images/man.png'

class StatusBox extends Component{
    render(){
        return (
            <div>
                <Panel bsStyle="primary">
                    <Row>
                        <Col xs={6} md={1}>
                            <Image src={man} circle width="50" />
                        </Col>                            
                        <Col xs={6} md={11}>
                            <Form horizontal>
                                <FormGroup controlId="formControlsTextarea">
                                    <Col md={12}>
                                        <FormControl componentClass="textarea" placeholder="What's in your mind ?" />
                                    </Col>                                            
                                </FormGroup>
                                <FormGroup>
                                    <Col mdOffset={10} md={2}>
                                    <Button bsStyle="primary">Post It ...</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Panel>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    postStatus: (post) => dispatch( actions.postStatus(post) );
}
export default connect(mapDispatchToProps)(StatusBox);