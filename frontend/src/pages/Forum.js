import React, { Component } from 'react';
import {Row , Col , Panel , Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

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