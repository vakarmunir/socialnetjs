import React , {Component} from 'react';
import {Alert} from 'react-bootstrap';

const MessageBox = props => {
    let alertMessages = props.messages.map( (msg , i) => <p key={i}>‒ {msg}</p> );            
    return (
        <div>            
            <Alert bsStyle={props.type === "error" ? "danger" : "alert-message"}>{alertMessages}</Alert>
        </div>        
    );
} 

export default MessageBox;