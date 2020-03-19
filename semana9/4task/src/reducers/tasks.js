const initialState = {
    tasksList: [{ id: 1, text: 'Use redux', done: false }],
    filter: "all"
};

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            {
                const newTask = {
                    id: Date.now(),
                    text: action.payload.text,
                    done: false
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
                            done: !task.done
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
                        done: true
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
                    return task.done===false
                })
                return {
                    ...state,
                    tasksList: newList
                }
            }
        case "SET_TASKS":
            {
                return {
                    ...state,
                    tasksList: action.payload.tasksList
                }
            }
        default:
            return state
    }
}

export default tasks;