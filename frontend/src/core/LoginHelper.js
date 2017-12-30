export default class LoginHelper {
    emailTextFieldHandler(e) {    
        var email = {...this.state.email};
        email.value = e.target.value;
        this.setState({ email });
    }
    passwordTextFieldHandler(e) {    
        var password = {...this.state.password};
        password.value = e.target.value;
        this.setState({ password });
      }
    loginExpectionHandler(e){
        let res = e.response.data;
        if( 'email' in res ){
            let email = {...this.email};
            email.value = res.email.value;
            email.validationState = res.email.validationState;
            
            let password = {...this.password};
            password.value = res.password.value;
            password.validationState = res.password.validationState;

            let message = {...this.state.message};        
            message.type = 'error';
            message.class = 'danger';      
            message.messages = res.messages;      

            this.setState({ email , password , message});
        }else{        
            let message = {...this.state.message};        
            message.type = 'error';
            message.class = 'danger';      
            message.messages = [e.response.data.message];
            this.setState({message});
        }
    }
}