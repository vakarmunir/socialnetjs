import Auth from './core/Auth';
import * as config from './config/config';
import * as actionTypes from './store/actions';
import axios from 'axios';

export default class AppBootstrap{
    constructor(store){        
        let auth = new Auth();
        if('jwtToken' in localStorage){
            auth.setAuthorization(localStorage.getItem('jwtToken'));
            this.fetchUser().then(
                res => {
                    console.log("userx === " , res);
                    let user  = { isAuthenticated: true, data: {...res.data} };
                    store.dispatch( {type: actionTypes.SET_USER_AUTH , user } );
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