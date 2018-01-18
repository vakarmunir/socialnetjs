import * as actionTypes from './actionTypes';

export const login = (user) => {
    return {
        type: actionTypes.AUTH_USER,
        user: user
    }
}