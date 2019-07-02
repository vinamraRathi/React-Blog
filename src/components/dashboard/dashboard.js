import React, { Component } from 'react'
import Notifications from './notification'
import ProjectList from '../projects/projectlist'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render(){
        //console.log(this.props)
        const { projects, notifications } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        notifications: state.firestore.ordered.notifications
    }
} 

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 5, orderBy: ['time', 'desc'] }
    ])
)(Dashboard)