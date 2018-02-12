import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row , Col , Panel, Image , FormGroup , ControlLabel , FormControl , Button , Form} from 'react-bootstrap';
import * as actions from '../store/actions/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import man from '../images/man.png'

class StatusBox extends Component{
    state = {
        post : {content:''},
        postButton: {disabled:true}        
    }
    statusChangeHandler(e){
        let post = {...this.state.post};
        post.content = e.target.value;
        let postButton = {...this.state.postButton};
        if(post.content.length === 0){
            postButton.disabled = true;
        }else{
            postButton.disabled = false;
        }
        this.setState({post,postButton});
    }
    postStatus(){
        let data = { post: {...this.state.post} , user:{...this.props.user} }        
        this.props.postStatus(data);        
    }
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
                                        <FormControl componentClass="textarea" placeholder="What's in your mind ?" value={this.state.post.content}  onChange={this.statusChangeHandler.bind(this)} />
                                    </Col>                                            
                                </FormGroup>
                                <FormGroup>
                                    <Col mdOffset={10} md={2}>
                                        <Button bsStyle="primary" onClick={this.postStatus.bind(this)} disabled={this.state.postButton.disabled || this.props.postInProcess}>Post It ...</Button>
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
    return {
        postStatus: (data) => dispatch( actions.postStatus(data) )
    }
};
const mapStateToProps = state => {
    return {
        post: state.post,
        postInProcess: state.post.data.inProcess,
        user: {email: state.user.email}
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(StatusBox);