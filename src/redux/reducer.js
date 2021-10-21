import { types } from "./action-types";

const initialState = {
    taskName: '',
    aboutTask: '',
    tasks: []
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TASKNAME:
            return {
                ...state,
                taskName: action.payload
            }
        case types.SET_ABOUTTASKNAME: {
            return {
                ...state,
                aboutTask: action.payload
            }
        }
        default: return state
    }
}

export default taskReducer;