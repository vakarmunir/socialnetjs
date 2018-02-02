import React, { Component } from 'react';
import {Row , Col , Panel , Table , Image , FormGroup , ControlLabel , FormControl , Button , Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import man from '../images/man.png'

class Index extends Component {
    render() {
        return (
            <div className="Index">

                <Row>
                    <Col xs={12} md={12}>
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
                    </Col>
                </Row>
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

export default Index;