export const addTask = (name) => {
    return {
        type: "ADD_TASK",
        payload: {
            name: name
        }
    }
}
export const toggleTask = (id) => {
    return {
        type: 'TOGGLE_TASK',
        payload: {
            id: id
        }
    }
}
export const removeTask = (id) => {
    return {
        type: "REMOVE_TASK",
        payload: {
            id: id
        }
    }
}
export const markAllComplete = () => {
    return {
        type: "MARK_ALL_COMPLETE"
    }
}
export const filterTasks = (filter) =>{
    return {
        type: "FILTER_TASKS",
        payload: {
            filter: filter
        }
    }
}
export const removeAllCompleted = () =>{
    return {
        type: "REMOVE_ALL_COMPLETED"
    }
}