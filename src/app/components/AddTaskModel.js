import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddTaskModel = (props) => {
    const { addTask, submitting, pristine, inputData } = props;
    let nextId = 6;
    console.log(inputData);
    return (
        <div>
            <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Add task</button>
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={() => addTask({id: nextId++, description: inputData.addTaskInputs.registeredFields.description, prior: "low", status: 'todo', date:  new Date().toTimeString().split(" ")[0].slice(0, -3) })}>
                                <div>
                                    <label>Description</label>
                                    <div>
                                        <Field name="description" component="input" type="text" placeholder="First Name"/>
                                    </div>
                                </div>
                                <div>
                                    <label>Prior</label>
                                    <div>
                                        <label><Field name="prior" component="input" type="radio" value="low"/> Low</label>
                                        <label><Field name="prior" component="input" type="radio" value="normal"/> Normal</label>
                                        <label><Field name="prior" component="input" type="radio" value="hight"/> Hight</label>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" disabled={pristine || submitting}>Submit</button>
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

export default reduxForm({
    form: 'AddTaskInputs'  // a unique identifier for this form
})(AddTaskModel)
