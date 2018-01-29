import {put} from 'redux-saga/effects';
import axios from 'axios';
import * as config from '../../config/config';
import Auth from '../../core/Auth';
import LoginHelper from '../../core/LoginHelper';
import * as actions from '../actions/index';

export function* authUserSaga(action){
    yield put( actions.authInProcess(true) );
    const {email , password} = action.user;    
    try{
      var res = yield axios.post(`${config.API_HOST}/user/login`, {email , password} );            
      yield localStorage.setItem('jwtToken' , res.headers['x-auth']);
      let auth = new Auth();
      auth.setAuthorization(res.headers['x-auth']);      
      const profile = {...res.data.profile};
      yield put( actions.setUserAuth( { isAuthenticated: true, data : null , email:res.data.email , profile } ) );
    }catch(e){
      const res = e.response;      
      const data = {
        email: {...res.data.email},
        password: {...res.data.password},
        message:{type:'error' , messages: [...res.data.messages] }
      }
      yield put( actions.setUserAuth( { isAuthenticated: false, data  , profile : null} ) );
    }
    yield put( actions.authInProcess(false) );    
}

export function * registerUserSaga(action){
  yield put( actions.authInProcess(true) );
  const {email ,  password} = action.user;  
  try{
    var res = yield axios.post(`${config.API_HOST}/user` , {email , password});
    yield localStorage.setItem('jwtToken' , res.headers['x-auth']);
    let auth = new Auth();
    auth.setAuthorization(res.headers['x-auth']);
    const profile = {
      displayname: res.data.profile.displayname                
    }
    yield put( actions.setUserAuth( { isAuthenticated: true, data : null , email:res.data.email, profile } ) );
  }catch(e){
    const res = e.response;                    
    if('errors' in res.data){      
      let errors = res.data.errors;
      if('password' in errors || 'email' in errors)
      {
        const dt = JSON.parse(res.config.data);
        let messages = [];        
        let emailValidationState = null;
        let passwordValidationState = null;
        if('email' in errors)
        {
          emailValidationState = 'error';
          messages.push(errors.email.message);
        }else{
          emailValidationState = null;
        }
        if('password' in errors)
        {
          passwordValidationState = 'error';
          messages.push(errors.password.message);
        }else{
          passwordValidationState = null;
        }                 
        const data = {
          email: {...dt.email , validationState : emailValidationState},
          password: {...dt.password , validationState : passwordValidationState},
          message:{type:'error' , messages }
        }
        yield put( actions.setUserAuth( { isAuthenticated: false, data  , profile : null} ) );
      }
    }else{
      const data = {
        email: {...res.data.email},
        password: {...res.data.password},
        message:{type:'error' , messages: [...res.data.messages] }
      }
      yield put( actions.setUserAuth( { isAuthenticated: false, data  , profile : null} ) );
    }
  }
  yield put( actions.authInProcess(false) );
}