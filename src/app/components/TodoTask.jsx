import React from "react";


let TodoTasks = (props) => {
    const inProgress = props.list.filter(task => task.status === 'todo');
    let todoTasks = [];
    inProgress.map((task) => {todoTasks.push(
        <div className="task" key={task.id}>
            <h4>{task.description}</h4>
            <p>Creating time: {task.date}</p>
            <button onClick={() => props.changeStatus(1)} className="btn btn-success btn-sm">Edit</button>
        </div>
        )}
    );

    return (<div>{todoTasks}</div>)
};

export default TodoTasks;