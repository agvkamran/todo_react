import { types } from "./action-types";

const initialState = {
    title: '',
    description: '',
    notes: []
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case types.SET_DESCRIPTION: {
            return {
                ...state,
                description: action.payload
            }
        }
        case types.SET_NOTES:
            return {
                ...state,
                notes: action.payload
            }
        case types.DELETE_NOTE:
            return {
                ...state,
                notes: [...state.notes.filter((note) => {
                    return note.id !== action.payload
                })]
            }
        default: return state
    }
}

export default taskReducer;