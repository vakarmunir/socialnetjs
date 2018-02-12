import * as actionTypes from './actionTypes';

export const postStatus = (data) => {    
    return {
        type: actionTypes.POST_STATUS,
        data
    }
}

export const postInProcess = postInProcessFlag => {
    return {
        type: actionTypes.POST_IN_PROCESS,
        postInProcessFlag
    }
}

export const setPost = post => {
    return {
        type: actionTypes.SET_POST,
        post
    }
}