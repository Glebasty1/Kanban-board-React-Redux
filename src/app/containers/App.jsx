import React from 'react';
import { connect } from 'react-redux';

import AddTask from './Form.jsx';
import TaskList from '../components/TaskList.jsx';
import { removeTask, changeStatus } from '../actions/userActions';


export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <TaskList removeTask={() => this.props.removeTask()} changeStatus={() => this.props.changeStatus()} list={this.props.tasks}/>
                <br/>
                <AddTask/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.task,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeTask: (id) => {
            dispatch(removeTask(id));
        },
        changeStatus: (id) => {
            dispatch(changeStatus(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

