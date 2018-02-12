import {put} from 'redux-saga/effects';
import axios from 'axios';
import * as config from '../../config/config';
import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions/index';

export function* loadActivitiesSaga(){    
    try{
        const res = yield axios.get(`${config.API_HOST}/activity`);
        const activities = [...res.data];
        yield put( actions.loadActivitiesData(activities) );
    }catch(e){
        console.log("activities could'nt be loaded!")
    }
}