import React, { Component } from 'react';
import {Grid , Row , Col , Alert , Nav , NavItem} from 'react-bootstrap';

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <Row>
          <Col xs={12} md={9}>
            On the index page            
          </Col>        
        </Row>
      </div>
    );
  }
}

export default Index;
