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
        case actionTypes.POST_IN_PROCESS:
            const newState = {...state};
            newState.data.inProcess = action.postInProcess;
            return {...newState};
        case actionTypes.POST_STATUS:            
            return {...state , ...action.post};
        default:
            return {...state};
    }    
}

export default reducer;