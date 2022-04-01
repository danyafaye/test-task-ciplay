import {combineReducers, createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import appReducer from "./loginReducer";

let reducers = combineReducers(
    {
        app: appReducer,
    }
)

const store = createStore(reducers, applyMiddleware(thunk))
export default store;