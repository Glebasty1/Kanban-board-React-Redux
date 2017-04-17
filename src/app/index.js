import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux"

import App from "./containers/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";


import taskList from "./reducers/taskReducer";
import { reducer as formReducer } from 'redux-form';


/*const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};*/
const reducers = {
    taskList,
    form: formReducer,
};

const reducer = combineReducers(reducers);

const store = createStore(
    reducer,
    // persistedState,
    applyMiddleware(createLogger())
);

/*store.subscribe(()=>{
    localStorage.setItem('state', JSON.stringify(store.getState()))
});*/



render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);