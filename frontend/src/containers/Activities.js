import React, {Component} from 'react';
import {connect} from 'react-redux';
import Activity from './Activity';
import * as actions from '../store/actions/index';

class Activities extends Component{

    componentDidMount(){
        this.props.loadActivities();
    }

    render(){
        let activities = this.props.activities.map(activity => <Activity />);
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