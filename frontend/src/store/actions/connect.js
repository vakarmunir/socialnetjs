import * as actionTypes from './actionTypes';

export const loadPeople = () => {
    return {
        type: actionTypes.LOAD_PEOPLE
    }
}

export const loadPeopleData = (people) => {
    return {
        type: actionTypes.LOAD_PEOPLE_DATA,
        people
    }
}