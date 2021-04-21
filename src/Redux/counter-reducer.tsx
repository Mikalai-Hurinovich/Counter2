import React from 'react';

const SET_MIN_VAL = 'SET_MIN_VAL'
const SET_MAX_VAL = 'SET_MAX_VAL'
const SET_COUNTER = 'SET_COUNTER'
const SET_ERROR = 'SET_ERROR'
const SET_SHOW = 'SET_SHOW'

export type initialStateType = {
    counter: number,
    minVal: number,
    maxVal: number,
    error: string,
    show: boolean
}
let initialState: initialStateType = {
    counter: 0,
    minVal: 0,
    maxVal: 5,
    error: '',
    show: false
}
type counterACType = ({ type: typeof SET_COUNTER, counter: number })
type setMinValACType = ({ type: typeof SET_MIN_VAL, minVal: number })
type setMaxValACType = ({ type: typeof SET_MAX_VAL, maxVal: number })
type setErrorACType = ({ type: typeof SET_ERROR, error: string })
type setShowACType = ({ type: typeof SET_SHOW, show: boolean })
type ActionsTypes = counterACType
    | setMinValACType
    | setMaxValACType
    | setErrorACType
    | setShowACType
export const CounterReducer = (state: initialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_COUNTER:
            return {...state, counter: action.counter}
        case SET_MIN_VAL:
            return {...state, counter: action.minVal}
        case SET_MAX_VAL:
            return {...state, counter: action.maxVal}
        case SET_ERROR:
            return {...state, counter: action.error}
        case SET_SHOW:
            return {...state, counter: action.show}
        default:
            return state
    }
}

export const setMinValAC = (minVal: number) => ({type: SET_MIN_VAL, minVal})
export const setMaxValAC = (maxVal: number) => ({type: SET_MAX_VAL, maxVal})
export const setCounterAC = (counter: number) => ({type: SET_COUNTER, counter})
export const setErrorAC = (error: string) => ({type: SET_ERROR, error})
export const setShowAC = (show: boolean) => ({type: SET_SHOW, show})


export default CounterReducer;
