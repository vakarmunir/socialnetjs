import * as actionTypes from './../actions/actionTypes';

const initialState = () => {
    return {
        isAuthenticated: false,
        authInProcess : false,
        data: {            
            email : {value : '' , validationState : null},
            password : {value : '' , validationState : null},      
            message: { type : null, class : null, messages : [] }
        },
        email: '',
        profile: {displayname : ''}
    }
};

const reducer = ( state = {...initialState()}, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_IN_PROCESS:
            const newState = {...state};                         
            newState.authInProcess = action.authInProcessFlag;           
            return {...newState}
        case actionTypes.USER_LOGOUT_STATE_UPDATE:          
            return {...initialState()};
        case actionTypes.SET_USER_AUTH:
            if(action.user.data !== null){
                let newMessage = {...state.data.message , ...action.user.data.message}; 
                let newData = {...state.data , ...action.user.data , message:newMessage};
                let newUserState = {...action.user , data : newData} 
                return {...state, ...newUserState}
            }else if(action.user.profile !== null){
                const isAuthenticated = action.user.isAuthenticated;
                const profile = {...action.user.profile};
                return {...state , ...action.user , profile}
            }else{                
                return {...state , ...action.user}                
            }            
        default:            
            return {...state}    
    }
};

export default reducer;