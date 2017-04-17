import React from "react";

export default class Column extends React.Component {

    constructor(args) {
        super(args);
    }

    static getEditButton(callback, params) {
        return typeof callback === 'function' ? (
                <button onClick={() => callback(params)} className="btn btn-success btn-sm">Edit</button>) : null;
    }

    static getDeleteButton(callback, params) {
        return typeof callback === 'function' ? (
                <button onClick={() => callback(params)} className="btn btn-danger btn-sm">Delete</button>) : null;
    }

    generateItems(items, editCallback, deleteCallback) {
        return items.map((item) => {
            return (
                <div className={item.prior} key={item.id}>
                    <h4>{item.description}</h4>
                    <p>Creating time: {item.date}</p>
                    {Column.getEditButton(editCallback, item.id)}
                    {Column.getDeleteButton(deleteCallback, item.id)}
                </div>
            );
        });
    }

    render() {
        return (
            <div className="col-md-3">
                <h1>{this.props.name}</h1>
                {this.generateItems(this.props.items, this.props.editCallback, this.props.deleteCallback)}
            </div>
        );
    }
};

Column.propTypes = {
    name: React.PropTypes.string,
    items: React.PropTypes.array,
    editCallback: React.PropTypes.func,
    deleteCallback: React.PropTypes.func
};