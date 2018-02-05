import * as actionTypes from './../actions/actionTypes';

const initialState = () => {
    return {        
        content : '',
        postType : 'post',
        data : {
            inProcess: false,
            contentValidationState: null
        }
    }
}

const reducer = (state = {...initialState()} , action ) => {
    switch(action.type){        
        case actionTypes.POST_STATUS:                        
            return {...state , ...action.post};
        case actionTypes.POST_IN_PROCESS:
            const newStateInProcess = {...state};
            newStateInProcess.data.inProcess = action.postInProcessFlag;            
            return {...newStateInProcess};
        default:
            return {...state};
    }
}

export default reducer;