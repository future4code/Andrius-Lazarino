const initialState = {
    tasksList: [{id:1, name:'Use redux', completed:false}]
};

const tasks = (state = initialState, action) => {
    // switch (action.type) {
    //     case "ADD_TASK":
    //         let task = state
    //         task.push({id: action.payload.id, name: action.payload.name, completed: false})
    //         return {...state, task}
    // }
    return state
}

export default tasks;