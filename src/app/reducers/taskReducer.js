import { ADD_TASK, REMOVE_TASK , CHANGE_STATUS, CHANGE_TASK_DESCRIPTION} from '../constants/Page.js';
import { List } from 'immutable';


const defaultState = [
            {
                id: 0,
                description: "Clean room",
                prior: "low",
                status: 'todo',
                date: new Date().toTimeString().split(" ")[0].slice(0, -3)
            },
            {
                id: 1,
                description: "Do test task",
                prior: "hight",
                status: 'in progress',
                date: new Date().toTimeString().split(" ")[0].slice(0, -3)
            },
            {
                id: 2,
                description: "Walk",
                prior: "hight",
                status: 'aborted',
                date: new Date().toTimeString().split(" ")[0].slice(0, -3)
            },
            {
                id: 3,
                description: "have fun",
                prior: "low",
                status: 'done',
                date: new Date().toTimeString().split(" ")[0].slice(0, -3)
            },
            {
                id: 4,
                description: "nboom room",
                prior: "normal",
                status: 'todo',
                date: new Date().toTimeString().split(" ")[0].slice(0, -3)
            },
            {
                id: 5,
                description: "6",
                prior: "normal",
                status: 'todo',
                date: new Date().toTimeString().split(" ")[0].slice(0, -3)
            },
    ];

const taskReducer =  (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return state.concat(action.payload);
            break;
        case REMOVE_TASK:
            /*return state.delete(action.payload);*/
            const taskId = action.payload;
            return state.filter(task => task.id !== taskId);
            break;
        case CHANGE_STATUS:
            return state.map((task) => {
                if (task.id === action.payload) {
                    task.status = "in progress";
                }
                return task;
            });
            break;
        case CHANGE_TASK_DESCRIPTION:
            return state.map((task) => {
                if (task.id === action.payload.id) {
                    task.description = action.payload.newTaskName;
                }
                return task;
            });
            break;

    }
    return state;
};

export default taskReducer;


/*case CHANGE_TASK_DESCRIPTION:
 return state.set([0, 'description'], action.payload);
 break;*/