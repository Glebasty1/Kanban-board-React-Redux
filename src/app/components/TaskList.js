import React from "react";

import TodoTasks from './TodoTask.js';
import InProgressTask from './InProgressTask.js';
import DoneTasks from './DoneTasks.js';
import AbortedTasks from './AbortedTasks.js';

let TaskList = (props) => {
    return (
            <div className="container">
                <div className="row">
                        <h2 className="text-center">Kanban Board</h2>
                    <div className="col-md-3">
                         <h1>DO IT</h1>
                        <TodoTasks changeStatus={props.changeStatus} taskList={props.taskList}/>
                        <button onClick={() => props.changeTaskName("Learn Immutable.js")} className="btn btn-sm">Change name</button>
                    </div>
                    <div className="col-md-3">
                        <h2>IN PROGRESS</h2>
                        <InProgressTask changeStatus={props.changeStatus} taskList={props.taskList}/>
                    </div>
                    <div className="col-md-3">
                        <h2>DONE</h2>
                        <DoneTasks removeTask={props.removeTask} taskList={props.taskList}/>
                    </div>
                    <div className="col-md-3">
                        <h2>ABORTED</h2>
                        <AbortedTasks removeTask={props.removeTask} taskList={props.taskList}/>
                    </div>
                </div>
            </div>
        );
};

export default TaskList;