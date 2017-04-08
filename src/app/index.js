import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux"

import App from "./containers/App.js";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import taskList from "./reducers/taskReducer";

const store = createStore(
    taskList,
    applyMiddleware(createLogger())
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);