const initialState = {
    tasks: {}
}

const planner = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TASKS":{
            return {
                tasks: action.payload.tasks
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