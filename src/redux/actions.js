import { types } from "./action-types";

export const setTitleAC = (payload) => ({type: types.SET_TITLE, payload});
export const setDescriptionAC = (payload) => ({type: types.SET_DESCRIPTION, payload});
export const deleteNoteAC = (payload) => ({type: types.DELETE_NOTE, payload});
export const setNotesAC = (payload) => ({type: types.SET_NOTES, payload});