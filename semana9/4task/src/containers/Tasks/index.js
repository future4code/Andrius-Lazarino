import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { toggleTask, removeTask } from "../../actions"



function showList(props) {
    const list = props.task.filter(task => {
        if (props.filter === "all") {
            return true
        }
        else if (props.filter === "pending") {
            console.log(task.completed)
            return task.completed === false
        }
        else if (props.filter === "completed") {
            return task.completed === true
        }
        return true
    }).map((task) => {
        return (<li key={task.id} onClick={() => { props.toggleTask(task.id) }}>{task.completed ? <Fragment>TOGGLE</Fragment> : <Fragment>NO TOGGLE</Fragment>} name: {task.name} <button onClick={() => { props.removeTask(task.id) }}>DELETAR</button></li>)
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
        removeTask: id => dispatch(removeTask(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)

// .filter(task => {
//     if (props.filter === "all") {
//         console.log("ueh")
//         return true
//     }
//     else if (props.filter === "pending") {
//         return task.completed === false
//     }
//     else if (props.filter === "completed") {
//         return task.completed === true
//     }
//     console.log("toma no rabo")
//     return true
// })