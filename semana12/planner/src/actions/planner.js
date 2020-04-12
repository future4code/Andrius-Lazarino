import axios from 'axios';

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-sagan-andrius"

// export const addTask = (task) => {
//     return {
//         type: "ADD_TASK",
//         payload: {
//             task
//         }
//     }
// }

export const setTasks = (tasks) => {
    return {
        type: "SET_TASKS",
        payload: {
            tasks
        }
    }
}

// Async

export const createTask = (text, day) => async (dispatch) => {
    
    try {
        await axios.post(baseUrl, {"text": text, "day": day})
        alert("Tarefa adicionada")
        dispatch(fetchTasks())
    }
    catch (error) {
        console.error(error)
    }
}

export const fetchTasks = () => async(dispatch) => {
    try {
        const response = await axios.get(baseUrl)
        dispatch(setTasks(response.data))
        // console.log(response.data)
    }
    catch(error) {
        console.error(error)
    }
}
