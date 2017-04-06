import React from "react";

let AbortedTasks = (props) => {
    let inProgress = props.taskList.filter(task => task.status === "aborted");
    let abortedTasks = [];

    inProgress.map((task) => {abortedTasks.push(
        <div className="task" key={task.id}>
            <h4>{task.description}</h4>
            <p>Creating time: {task.date}</p>
            <button onClick={() => props.removeTask(task.id)} className="btn btn-danger btn-sm">Delete</button>
        </div>
        )}
    );

    return (<div>{abortedTasks.sort()}</div>)
};

export default AbortedTasks;