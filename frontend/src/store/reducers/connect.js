import * as actionTypes from './../actions/actionTypes';

const initialState = () => {
    return {
        people: [
            {name:'aaaaa'},
            {name:'bbbbb'},
        ]
    }
}

const reducer = (state = initialState() , action) => {
    switch(action.type)
    {
        case actionTypes.LOAD_PEOPLE:
            console.log("Pass from reducer ....");
            return {...state};
        default:
            return {...state};
    }
}

export default reducer;