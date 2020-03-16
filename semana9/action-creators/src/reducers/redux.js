const initialState = {
    list: []
};

export const reduxReducer = (state = initialState, action){
    switch(action.type) {
        case "ADD_TASK":
            let newState = state.list
            newState.push({taskName: action.payload.taskName, taskComplete: false})
            return newState
    }

}