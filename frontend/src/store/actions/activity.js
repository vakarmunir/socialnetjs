import * as actionTypes from './actionTypes';

export const addActivity = activity => {
    return {
        type: actionTypes.ADD_ACTIVITY,
        activity
    }
}

export const loadActivities = () => {
    return {
        type: actionTypes.LOAD_ACTIVITIES
    }
}

export const loadActivitiesData = (activities) => {
    return {
        type: actionTypes.LOAD_ACTIVITIES_DATA,
        activities
    }
}