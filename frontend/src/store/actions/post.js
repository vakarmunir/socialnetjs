import * as actionTypes from './actionTypes';

export const postStatus = (data) => {    
    return {
        type: actionTypes.POST_STATUS,
        data
    }
}