import React from "react";


let TodoTasks = (props) => {
    console.log(props.taskList);
    const inProgress = props.taskList.filter(task => task.status === 'todo');
    let todoTasks = [];

    inProgress.map((task) => {
        todoTasks.push(
        <div className={task.prior}  key={task.id}>
            <h4 className="task-description">{task.description}</h4>
            <p>Creating time: {task.date}</p>
            <button onClick={() => props.changeStatus(task.id, "in progress")} className="btn btn-success btn-md">Edit</button>
        </div>
        )}
    );

    return (<div>{todoTasks}</div>)
};

export default TodoTasks;