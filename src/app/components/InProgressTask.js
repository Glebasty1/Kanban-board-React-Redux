import React from "react";

let InProgressTasks = (props) => {
    const inProgress = props.taskList.filter(task => task.status === "in progress");
    let inProgressTasks = [];
    inProgress.map((task) => {inProgressTasks.push(
         <div className={task.prior} key={task.id}>
         <h4 className="task-description">{task.description}</h4>
         <p>Creating time: {task.date}</p>
         <button className="btn btn-success btn-sm">Edit</button>
     </div>
     )}
    );

    return (<div>{inProgressTasks}</div>)
};

export default InProgressTasks;