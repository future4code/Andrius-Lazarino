import planner from "./planner";
import { addTask } from "../actions/planner"

const mockStore = {
    tasks: []
}

describe("Planner Reducer", () => {
    test("ADD_TASK", () => {
        const mockText = "Programar a noite inteira"
        const newTaskAction = addTask(mockText)
        const newStore = planner(mockStore, newTaskAction)
        // console.log(newStore)
        expect(newStore.tasks).toHaveLength(1)
        expect(newStore.tasks[0].)
    })
})