import React from "react";

import AddTaskForm from './AddTaskForm.js';
import TaskList from './TaskList.js';
import AddTaskModel from './AddTaskModel';

export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <TaskList removeTask={this.props.removeTask}
                          changeStatus={this.props.changeStatus}
                          taskList={this.props.tasks}
                          changeTaskName={this.props.changeTaskName} />
                {/*<AddTaskForm addTask={this.props.addTask}/>*/}
                <AddTaskModel addTask={this.props.addTask} inputData={this.props.formData} />
            </div>
        );
    }
}