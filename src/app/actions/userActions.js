import { ADD_TASK, REMOVE_TASK, CHANGE_STATUS } from "../constants/Page.js"

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