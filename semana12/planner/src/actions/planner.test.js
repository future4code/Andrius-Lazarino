import { addTask } from "./planner"

describe("Planner Actions-Creators", () => {
    test("Add task", () => {
        const mockTask = "Programar a noite inteira"
        const mockedAction = addTask(mockTask)

        expect(mockedAction.type).toEqual("ADD_TASK")
        expect(mockedAction.payload.task).toBeDefined()
        expect(mockedAction.payload.task).toEqual(mockTask)
    })
})