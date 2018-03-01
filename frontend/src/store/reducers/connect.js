import * as actionTypes from './../actions/actionTypes';

const initialState = () => {
    return {
        people: []
    }
}

const reducer = (state = initialState() , action) => {
    switch(action.type)
    {
        case actionTypes.LOAD_PEOPLE:            
            return {...state};
        case actionTypes.LOAD_PEOPLE_DATA:
            let people = [...state.people, ...action.people]            
            return {...state, people};
        default:
            return {...state};
    }
}

export default reducer;