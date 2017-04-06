import React from "react";

let DoneTasks = (props) => {
    const inProgress = props.taskList.filter(task => task.status === "done");
    let doneTasks = [];
    inProgress.map((task) => {doneTasks.push(
        <div className="task" key={task.id}>
            <h4>{task.description}</h4>
            <p>Creating time: {task.date}</p>
            <button onClick={() => props.removeTask(1)} className="btn btn-danger btn-sm">Delete</button>
            <button className="btn btn-success btn-sm">Edit</button>
        </div>
        )}
    );

    return (<div>{doneTasks}</div>)
};

export default DoneTasks;