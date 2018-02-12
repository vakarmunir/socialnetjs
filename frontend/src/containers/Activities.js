import React, {Component} from 'react';
import {connect} from 'react-redux';
import Activity from './Activity';
import * as actions from '../store/actions/index';

class Activities extends Component{

    componentDidMount(){
        this.props.loadActivities();
    }

    render(){
        let activities = this.props.activities.map(
            activity => {                
                return (
                    <Activity 
                        key={activity._id} 
                        userDisplayName={activity.actor.user.profile.displayname} 
                        action={activity.verb} 
                        publishedAt={activity.publishedTimeSpan}
                        content = {activity.object.post.content} 
                    />
                );
            }
        );
        return(
            <div>
                {activities}                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        activities: state.activity.activities
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loadActivities: () => { dispatch( actions.loadActivities() ) }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Activities);