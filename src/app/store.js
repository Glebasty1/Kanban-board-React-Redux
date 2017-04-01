import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
/*import { reducer as formReducer } from 'redux-form';*/

import task from "./reducers/taskReducer";

export default createStore(
    combineReducers({
        task,
    }),
    {},
    applyMiddleware(createLogger())
);
