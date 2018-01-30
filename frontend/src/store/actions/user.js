import * as actionTypes from './actionTypes';

export const register = (user) => {    
    return {
        type: actionTypes.REGISTER_USER,
        user: user
    }
}
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
export const logoutStateUpdate = () => {
    return {
        type: actionTypes.USER_LOGOUT_STATE_UPDATE        
    }
}
export const setUserAuth = (user) => {
    return {
        type : actionTypes.SET_USER_AUTH,
        user       
    }
}
export const authInProcess = (authInProcessFlag) => {
    return {
        type : actionTypes.AUTH_IN_PROCESS,
        authInProcessFlag       
    }
}