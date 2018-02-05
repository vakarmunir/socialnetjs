import {put} from 'redux-saga/effects';
import axios from 'axios';
import * as config from '../../config/config';
import * as actions from '../actions/index';

export function* postStatusSaga(action){
  yield put( actions.postInProcess(true) );
  const data = {...action.data};        
  try{
    var res = yield axios.post(`${config.API_HOST}/post`, data );
    console.log("ress ===== ",res);
    //const profile = {...res.data.profile};
    //yield put( actions.setUserAuth( { isAuthenticated: true, data : null , email:res.data.email , profile } ) );
  }catch(e){
    const res = e.response;
    console.log("res err ==== " , res);      
    /*const data = {
      email: {...res.data.email},
      password: {...res.data.password},
      message:{type:'error' , messages: [...res.data.messages] }
    }*/
    //yield put( actions.setUserAuth( { isAuthenticated: false, data  , profile : null} ) );
  }
  yield put( actions.postInProcess(false) );
}