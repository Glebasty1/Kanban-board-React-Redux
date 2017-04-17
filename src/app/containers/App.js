import React from 'react';
import { connect } from 'react-redux';

import { addTask, removeTask, changeStatus, changeTaskName } from '../actions/userActions';

import { App } from '../components/App'

const mapStateToProps = (state) => {
    console.log(state);
    return {
        tasks: state.taskList,
        formData: state.form,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => {
            dispatch(addTask(task));
        },
        removeTask: (id) => {
            dispatch(removeTask(id));
        },
        changeStatus: (id, newTaskStatus) => {
            dispatch(changeStatus(id, newTaskStatus))
        },
        changeTaskName: (id, newTaskName) => {
            dispatch(changeTaskName(id, newTaskName))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

