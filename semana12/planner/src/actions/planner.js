import axios from 'axios';

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-sagan-andrius"

export const addTask = (task) => {
    return {
        type: "ADD_TASK",
        payload: {
            task
        }
    }
}