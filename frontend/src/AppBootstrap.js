import Auth from './core/Auth';
import * as config from './config/config';
import * as actions from './store/actions/index';
import axios from 'axios';

export default class AppBootstrap{
    constructor(store){        
        let auth = new Auth();
        if('jwtToken' in localStorage){

            let user  = { isAuthenticated: true , data:null , profile:{email:""} };            
            store.dispatch( actions.setUserAuth(user) );
            auth.setAuthorization(localStorage.getItem('jwtToken'));
            this.fetchUser().then(
                res => {                    
                    let user  = { isAuthenticated: true, data:null , profile: {...res.data} };
                    store.dispatch( actions.setUserAuth(user) );                    
                },
                error => {
                    console.log("error loading me === " , error);                    
                }
            );                    
        }
    }
    async fetchUser(){
        let res = await axios.get(`${config.API_HOST}/user/me`);
        return res;        
    }
}