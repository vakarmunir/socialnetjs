import * as actionTypes from './actionTypes';

export const postStatus = (post) => {
    return {
        type: actionTypes.POST_STATUS,
        post: post
    }
}