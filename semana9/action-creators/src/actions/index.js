// export const nomeActionCreator = () => {
//     return {
//         type: "OQUE_FAZ"
//     }
// }


export const addTask = (taskName) => {
    return {
        type: "ADD_TASK",
        payload: {
            taskName: taskName
        }
    }
}
export const removeTask = (taskID) => {
    return {
        type: "REMOVE_TASK",
        payload: {
            taskID: taskID
        }
    }
}
export const markAllComplete = () => {
    return {
        type: "MARK_ALL_COMPLETE"
    }
}
export const showAllTasks = () => {
    return {
        type: "SHOW_ALL_TASKS"
    }
}
export const showPendingTaks = () => {
    return {
        type: "SHOW_PENDING_TASKS"
    }
}
export const showCompleteTasks = () => {
    return {
        type: 'SHOW_COMPLETE_TASKS'
    }
}