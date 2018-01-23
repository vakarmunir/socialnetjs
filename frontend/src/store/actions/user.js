import * as actionTypes from './actionTypes';

export const login = (user) => {
    return {
        type: actionTypes.AUTH_USER,
        user: user
    }
}
export const logout = () => {
    return {
        type: actionTypes.USER_LOGOUT        
    }
}

export const setUserAuth = (user) => {
    return {
        type : actionTypes.SET_USER_AUTH ,
        user       
    }
}

export const authInProcess = (authInProcessFlag) => {
    return {
        type : actionTypes.AUTH_IN_PROCESS ,
        authInProcessFlag       
    }
}