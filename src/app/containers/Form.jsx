import React from 'react';
import { connect } from 'react-redux';

import { addTask } from '../actions/userActions'

let AddTask =  ({dispatch}) => {
    let input;
    let nextId = 5;
    return (
        <div>
            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModal">Добавить</button>
            <div className="modal fade" id="myModal" role="dialog">
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
                                dispatch(addTask({id: nextId++, description: input.value, prior: "low", status: 'todo', date:  new Date().getHours() + ":" + new Date().getMinutes()}));
                                input.value = ''
                            }}>
                                <div>
                                    <label>Description</label>
                                    <div>
                                        <input ref={node => { input = node }} name="description" type="text" placeholder="Description"/>
                                    </div>
                                </div>
                                <div>
                                    <label>Prior</label>
                                    <div>
                                        <label><input  name="prior" type="radio" value="low" />Low</label>
                                        <label><input  name="prior" type="radio" value="normal" />Normal</label>
                                        <label><input  name="prior" type="radio" value="hight" />Hight</label>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-primary">Добавить</button>
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

AddTask = connect()(AddTask);

export default AddTask;


