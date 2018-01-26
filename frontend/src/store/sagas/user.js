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
      const profile = {
        email: res.data.email                
      }
      yield put( actions.setUserAuth( { isAuthenticated: true, data : null , profile } ) );
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
      email: res.data.email                
    }
    yield put( actions.setUserAuth( { isAuthenticated: true, data : null , profile } ) );
  }catch(e){
    const res = e.response;                    
    if('errors' in res.data){      
      let errors = res.data.errors;
      if('password' in errors || 'password' in errors)
      {
        const dt = JSON.parse(res.config.data);
        let messages = [];        
        if('password' in errors)
        {
          messages.push(errors.password.message);
        }
        if('email' in errors)
        {
          messages.push(errors.email.message);
        }
        console.log("messages ===== " , messages);
        
        const data = {
          email: {...dt.email , validationState : 'error'},
          password: {...dt.password , validationState : 'error'},
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