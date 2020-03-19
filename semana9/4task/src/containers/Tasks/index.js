import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { toggleTask, deleteTask } from "../../actions"



function showList(props) {
    const list = props.task.filter(task => {
        if (props.filter === "all") {
            return true
        }
        else if (props.filter === "pending") {
            return task.done === false
        }
        else if (props.filter === "completed") {
            return task.done === true
        }
        return true
    }).map((task) => {
        return (<li key={task.id} onClick={() => { props.toggleTask(task.id) }}>{task.done ? <Fragment>TOGGLE</Fragment> : <Fragment>NO TOGGLE</Fragment>} name: {task.text} <button onClick={() => { props.deleteTask(task.id) }}>DELETAR</button></li>)
    })
    return list
}
function Tasks(props) {
    return (
        <div>
            <ul>
                {showList(props)}
            </ul>

        </div>
    )
}
const mapStateToProps = state => {
    return {
        task: state.tasks.tasksList,
        filter: state.tasks.filter
    }
}
const mapDispatchToProps = dispatch => {
    return {
        toggleTask: (id) => dispatch(toggleTask(id)),
        deleteTask: id => dispatch(deleteTask(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)