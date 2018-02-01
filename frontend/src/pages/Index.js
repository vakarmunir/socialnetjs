import React, { Component } from 'react';
import {Row , Col , Panel , Table , Image , FormGroup , ControlLabel , FormControl} from 'react-bootstrap';
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
                                    <form>
                                        <FormGroup controlId="formControlsTextarea">                                            
                                            <FormControl componentClass="textarea" placeholder="textarea" />
                                        </FormGroup>
                                    </form>
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