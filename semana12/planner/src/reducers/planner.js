const initialState = {
    tasks: []
}

const planner = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":{
            const newTasks = [...state.tasks, action.payload.task]
            return {
                tasks: newTasks
            }
        }
        default:{
            return {
                state
            }
        }
    }
}
export default planner;