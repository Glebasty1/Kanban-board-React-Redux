import React from "react";

let InProgressTasks = (props) => {
    const inProgress = props.list.filter(task => task.status === "in progress");
    let inProgressTasks = [];
    inProgress.map((task) => {inProgressTasks.push(
         <div className="task" key={task.id}>
         <h4>{task.description}</h4>
         <p>Creating time: {task.date}</p>
         <button className="btn btn-success btn-sm">Edit</button>
     </div>
     )}
    );

    return (<div>{inProgressTasks}</div>)
};

export default InProgressTasks;