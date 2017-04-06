import { ADD_TASK, REMOVE_TASK , CHANGE_STATUS} from "../constants/Page.js"

const defaultState = [
    {
        id: 1,
        description: "Clean room",
        prior: "low",
        status: 'todo',
        date: new Date().toTimeString().split(" ")[0].slice(0, -3)
    },
    {
        id: 2,
        description: "Do test task",
        prior: "hight",
        status: 'in progress',
        date: new Date().toTimeString().split(" ")[0].slice(0, -3)
    },
    {
        id: 3,
        description: "Walk",
        prior: "hight",
        status: 'aborted',
        date: new Date().toTimeString().split(" ")[0].slice(0, -3)
    },
    {
        id: 4,
        description: "have fun",
        prior: "hight",
        status: 'done',
        date: new Date().toTimeString().split(" ")[0].slice(0, -3)
    },
];

const taskReducer =  (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return state.concat(action.payload);
            break;
        case REMOVE_TASK:
            const taskId = action.payload;
            console.log('Hello', taskId);
            return state.filter(task => task.id !== taskId);
            break;
        case CHANGE_STATUS:
            return state.map((task) => {
                if (task.id === action.payload) {
                    task.status = "in progress";
                }
            });

    }
    return state;
};

export default taskReducer;