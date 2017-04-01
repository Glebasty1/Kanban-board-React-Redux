import React from "react";

import TodoTasks from './TodoTask.jsx';
import InProgressTask from './InProgressTask.jsx';
import DoneTasks from './DoneTasks.jsx';
import AbortedTasks from './AbortedTasks.jsx';

let TaskList = (props) => {
    return (
            <div className="container">
                <div className="row">
                        <h1 className="text-center">Kanban Board</h1>
                    <div className="col-md-3">
                         <h1>DO IT</h1>
                        <TodoTasks changeStatus={() => props.changeStatus()} list={props.list}/>
                    </div>
                    <div className="col-md-3">
                        <h1>IN PROGRESS</h1>
                        <div>
                            <InProgressTask list={props.list}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h1>DONE</h1>
                        <DoneTasks removeTask={() => props.removeTask()} list={props.list}/>
                    </div>
                    <div className="col-md-3">
                        <h1>ABORTED</h1>
                        <AbortedTasks removeTask={() => props.removeTask()} list={props.list}/>
                    </div>
                </div>
            </div>
        );
};

export default TaskList;