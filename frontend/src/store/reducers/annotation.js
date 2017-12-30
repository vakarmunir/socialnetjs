import * as actionTypes from './../actions';

const initialState = {
    annotations: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_ANNOTATION:
            const newAnnotation = {
                id: action.annotationData.id, 
                quote: action.annotationData.quote,
                text: action.annotationData.text
            }
            return {
                ...state,
                annotations: state.annotations.concat( newAnnotation )
            }
        case actionTypes.DELETE_ANNOTATION:            
            return {
                ...state,
                annotations: state.annotations.filter(annotation => annotation.id !== action.id)
            }
        case actionTypes.UPDATED_ANNOTATION:            
            return {
                ...state,
                annotations: state.annotations.map(annotation => annotation.id === action.annotationData.id ? action.annotationData : annotation)
            }
        default:            
            return {...state}    
    }
    //return state;
};

export default reducer;