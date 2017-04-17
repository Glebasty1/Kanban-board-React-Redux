import React from "react";
import Column from './Column';

const getItemsByStatus = (items, status) => {
    return items.filter((item) => item.status === status);
};

const generateColumns = (columns) => {
    return columns.map((column) => {
        return (
            <Column
                key={column.name}
                name={column.name}
                items={column.items}
                editCallback={column.editCallback}
                deleteCallback={column.deleteCallback}
            />
        );
    });
};

let TaskList = (props) => {
    const columns = [
        {
            name: 'DO IT',
            items: getItemsByStatus(props.taskList, 'todo'),
            editCallback: props.changeStatus,
        },
        {
            name: 'IN PROGRESS',
            items: getItemsByStatus(props.taskList, 'in progress'),
            editCallback: props.changeTaskName,
        },
        {
            name: 'DONE',
            items: getItemsByStatus(props.taskList, 'done'),
            editCallback: props.changeStatus,
            deleteCallback: props.removeTask
        },
        {
            name: 'ABORTED',
            items: getItemsByStatus(props.taskList, 'aborted'),
            deleteCallback: props.removeTask
        }
    ];
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center">Kanban Board</h1>
                {generateColumns(columns)}
            </div>
        </div>
    );
};

export default TaskList;