import {put} from 'redux-saga/effects';
import axios from 'axios';
import * as config from '../../config/config';
import * as actions from '../actions/index';

export function* postStatusSaga(action){
  yield put( actions.postInProcess(true) );
  const data = {...action.data};        
  try{
    var res = yield axios.post(`${config.API_HOST}/post`, data );
    const activity = {...res.data};
    const post  = {...activity.object.post}
    const {content,postType} = post;
    yield put(actions.setPost({content,postType}));
    yield put(actions.addActivity(activity));        
  }catch(e){
    const res = e.response;
    console.log("Something went wrong : " , res.data);          
  }
  yield put( actions.postInProcess(false) );
}