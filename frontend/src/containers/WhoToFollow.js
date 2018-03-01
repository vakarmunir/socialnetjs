import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Panel} from 'react-bootstrap';
import * as actions from '../store/actions/index';
import '../styles/general.css';
import PeopleShort from '../components/PeopleShort';

class WhoToFollow extends Component
{
    componentDidMount(){
        this.props.loadPeople();        
    }

    render()
    {
        let people = this.props.people.map(
            people => {
                return (
                    <PeopleShort displayname={people.profile.displayname} />                    
                )
            }
        );
        return (
            <div>               
                 
                <Panel>                    
                    <h4>Who to Follow</h4>                                                                                                                                                                                                                                                                                                                                                                                                                                  
                    {people}
                    {JSON.stringify(this.props.people)}
                </Panel>                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        people: state.connect.people
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadPeople : () => dispatch(actions.loadPeople())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WhoToFollow);