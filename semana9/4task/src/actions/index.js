import axios from "axios"
export const addTask = (name) => {
    return {
        type: "ADD_TASK",
        payload: {
            name: name
        }
    }
}
export const setToggleTask = (id) => {
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

export const setTasks = (tasksList) =>{
    return {
        type: "SET_TASKS",
        payload: {
            tasksList: tasksList
        }
    }
}

//async
export const fetchTasks = () => async (dispatch, getState) => {
    const result = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/andrius/todos"
    )
    dispatch(setTasks(result.data.todos))
}

export const createTask = name => async (dispatch, getState) => {
    try{
    await axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/andrius/todos",
        {
            text: name
        }

    )
        dispatch(fetchTasks())
    }
    catch (error){console.log(error)}
}

export const toggleTask = id => async (dispatch,getState) => {
    const response = await axios.put(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/andrius/todos/${id}/toggle`
    )
    dispatch(setToggleTask(id))
}

export const deleteTakscompleted = ()=> async (dispatch, getState) =>{
    const response = await axios.delete(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/andrius/todos/delete-done`
    )
    dispatch(fetchTasks())
}

export const deleteTask = (id)=> async (dispatch, getState) =>{
    const response = await axios.delete(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/andrius/todos/${id}`
    )
    dispatch(fetchTasks())
}