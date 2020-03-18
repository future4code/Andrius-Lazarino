const initialState = {
    tasksList: [{ id: 1, name: 'Use redux', completed: false }],
    filter: "all"
};

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            {
                let task = state
                const newTask = {
                    id: Date.now(),
                    name: action.payload.name,
                    compĺeted: false
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
                            completed: !task.completed,
                            ...task
                        }
                    }
                    return task
                })
                return {
                    tasksList: newList,
                    ...state
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
                    tasksList: newList,
                    ...state
                }
            }
        case "MARK_ALL_COMPLETE":
            {
                const newList = state.tasksList.map(task => {
                    return {
                        completed: true,
                        ...task
                    }
                })
                console.log(newList)
                return {
                    tasksList: newList,
                    ...state
                }
            }
        case "FILTER_TASKS":
            {
                return {
                    filter: action.payload.filter,
                    ...state
                }
            }
        default:
            return state
    }
}

export default tasks;