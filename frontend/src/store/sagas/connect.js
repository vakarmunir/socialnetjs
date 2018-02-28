import {put} from 'redux-saga/effects';
import axios from 'axios';
import * as config from '../../config/config';
import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions/index';

export function* loadPeople()
{
    try{
        const res = yield axios.get(`${config.API_HOST}/user/all`);
        //console.log("users === " , res);
        const people = [...res.data];
        yield put( actions.loadPeopleData(people) );
    }catch(e){
        console.log("people could'nt be loaded!");
    }    
}