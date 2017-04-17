import { ADD_TASK, REMOVE_TASK, CHANGE_STATUS, CHANGE_TASK_DESCRIPTION } from '../constants/Page.js';

/*
 * action creators
 */

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    };
};

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        payload: id
    }
};

export const changeStatus = (id) => {
    return {
        type: CHANGE_STATUS,
        payload: id

    }
};

export const changeTaskName = (id, newTaskName) => {
    return {
        type: CHANGE_TASK_DESCRIPTION,
        payload: {
            id,
            newTaskName
        }
    }
};