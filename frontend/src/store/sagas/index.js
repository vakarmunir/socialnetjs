import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as userSagas from './user';

export function* watchAuth()
{
    yield takeEvery(actionTypes.AUTH_USER , userSagas.authUserSaga);
    yield takeEvery(actionTypes.REGISTER_USER , userSagas.registerUserSaga);
}