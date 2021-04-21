import React from 'react'
import {combineReducers, createStore} from "redux";
import CounterReducer from "./counter-reducer";

const reducers = combineReducers({
    counter: CounterReducer
})

export type ReduxRootState = ReturnType<typeof reducers>

let store = createStore(reducers)
export default store;

// @ts-ignore
window.store = store
