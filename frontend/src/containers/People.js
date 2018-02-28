import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Panel, Row, Col, Image, Button} from 'react-bootstrap';
import * as actions from '../store/actions/index';
import man from '../images/man.png'
import '../styles/general.css';

class People extends Component
{
    componentDidMount(){
        this.props.loadPeople();
        console.log("==============>>");
    }

    render()
    {
        return (
            <div>               
                 
                <Panel>                    
                    <h4>Who to Follow</h4>                    
                    <Row>
                        <Col md={3} md={3}>
                            <center>
                                <Image src={man} circle width="50" />
                            </center>                            
                        </Col>
                        <Col md={4} md={4} className="no-left-padding">
                            <a href="#">waqarmuneer</a>
                        </Col>
                        <Col md={5} md={5}>
                            <Button bsStyle="primary">
                                Follow
                            </Button>
                        </Col>
                    </Row>                                                                                                                                                                                                                                                                                                                                                                                          

                    {JSON.stringify(this.props.people)}
                </Panel>                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        people: state.connect
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadPeople : () => dispatch(actions.loadPeople())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(People);