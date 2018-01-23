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
}