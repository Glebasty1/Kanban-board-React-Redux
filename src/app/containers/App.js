import React from 'react';
import { connect } from 'react-redux';

import AddTaskForm from '../components/AddTaskForm.js';
import TaskList from '../components/TaskList.js';
import { removeTask, changeStatus, changeTaskName } from '../actions/userActions';

export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <TaskList removeTask={this.props.removeTask} changeTaskName={this.props.changeTaskName} changeStatus={this.props.changeStatus} taskList={this.props.tasks} />
                <br />
                <AddTaskForm />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeTask: (id) => {
            dispatch(removeTask(id));
        },
        changeStatus: (id) => {
            dispatch(changeStatus(id))
        },
        changeTaskName: (newTaskName) => {
            dispatch(changeTaskName(newTaskName))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

