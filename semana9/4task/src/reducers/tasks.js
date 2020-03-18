const initialState = {
    tasksList: [{ id: 1, name: 'Use redux', completed: false }],
    filter: "all"
};

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            {
                const newTask = {
                    id: Date.now(),
                    name: action.payload.name,
                    completed: false
                }
                return {
                    ...state,
                    tasksList: [newTask, ...state.tasksList]
                }
            }
        case "TOGGLE_TASK":
            {
                const newList = state.tasksList.map(task => {
                    if (task.id === action.payload.id) {
                        return {
                            ...task,
                            completed: !task.completed
                        }
                    }
                    return task
                })
                return {
                    ...state,
                    tasksList: newList
                }
            }
        case "REMOVE_TASK":
            {
                const newList = state.tasksList.filter(task => {
                    if (task.id === action.payload.id) {
                        return false
                    }
                    return true
                })
                return {
                    ...state,
                    tasksList: newList
                }
            }
        case "MARK_ALL_COMPLETE":
            {
                const newList = state.tasksList.map(task => {
                    return {
                        ...task,
                        completed: true
                    }
                })
                console.log(newList)
                return {
                    ...state,
                    tasksList: newList
                }
            }
        case "FILTER_TASKS":
            {
                return {
                    ...state,
                    filter: action.payload.filter
                }
            }
        case "REMOVE_ALL_COMPLETED":
            {
                const newList = state.tasksList.filter(task => {
                    return task.completed===false
                })
                return {
                    ...state,
                    tasksList: newList
                }
            }
        default:
            return state
    }
}

export default tasks;