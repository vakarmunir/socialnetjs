import * as actionTypes from './../actions';

const initialState = {
    isAuthenticated: false,
    data: {}
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_USER_AFTER_LOGIN:
            let data = {...action.user.data};
            let newUserState = {...action.user , data} 
            return {...state, ...newUserState}                
        default:            
            return {...state}    
    }
};

export default reducer;