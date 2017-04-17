import React from 'react';
import { connect } from 'react-redux';

import { addTask } from '../actions/userActions'

let EditTaskModal =  (props, {dispatch}) => {
    let input;
    let nextId = 20;
    return (
        <div>
            <button type="button" className="btn btn-success btn-md" data-toggle="modal" data-target="#myModal2">Edit</button>
            <div className="modal fade" id="myModal2" role="dialog">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>

                        </div>
                        <div className="modal-body">
                            <form onSubmit={e => {
                                e.preventDefault();
                                if (!input.value.trim()) {
                                    return
                                }
                                dispatch(addTask({id: nextId++, description: input.value, prior: "low", status: 'todo', date:  new Date().toTimeString().split(" ")[0].slice(0, -3) }));
                                input.value = '';

                                $('#myModal').modal('hide')
                            }}>
                                <div>
                                    <label>{props.description}</label>
                                    <div>
                                        <input className="form-control" ref={node => { input = node }} name="description" type="text" placeholder="Description"/>
                                    </div>
                                </div>
                                <br/>
                                <div>
                                    <button type="submit" className="btn btn-primary">Change description</button>
                                    <br/><br/>
                                    <button className="btn btn-primary">Change status to In Progress</button>
                                    <br/><br/>
                                    <button className="btn btn-primary">Change status to Aborted</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

EditTaskModal = connect()(EditTaskModal);

export default EditTaskModal;


