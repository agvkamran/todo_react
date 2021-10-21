import taskReducer from "./reducer";

const { createStore, combineReducers } = require("redux");

const reducers = combineReducers({
    taskPage: taskReducer
})

const store = createStore(reducers);

export default store;