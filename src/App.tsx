import React, {useEffect} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import CounterSettings from "./CounterSettings/CounterSettings";
import {useDispatch, useSelector} from "react-redux";
import {initialStateType, setCounterAC, setErrorAC, setMaxValAC, setMinValAC, setShowAC} from "./Redux/counter-reducer";
import {ReduxRootState} from "./Redux/store";
import {restoreState} from "./localStorage";

function App() {
    const {minVal, counter, maxVal, error, show} = useSelector<ReduxRootState, initialStateType>(state => state.counter)
    const dispatch = useDispatch();

    const setCounter = (count: number) => dispatch(setCounterAC(count))

    const setMaxVal = (maxVal: number) => dispatch(setMaxValAC(maxVal))
    const setMinVal = (minVal: number) => dispatch(setMinValAC(minVal))
    const setError = (error: string) => dispatch(setErrorAC(error))
    const setShow = (show: boolean) => dispatch(setShowAC(show))

    useEffect(() => {
        const localStorageMinValue = restoreState('minVal', minVal);
        const localStorageMaxValue = restoreState('maxVal', maxVal);
        localStorageMinValue ? dispatch(setMinVal(localStorageMinValue)) : dispatch(setMinValAC(minVal))
        localStorageMaxValue ? dispatch(setMaxVal(localStorageMaxValue)) : dispatch(setMinValAC(maxVal))
        localStorageMinValue ? dispatch(setCounter(localStorageMinValue)) : dispatch(setCounter(counter))
    }, [])

    return (
        <div className="App">
            {!show && <Counter
                minVal={minVal}
                maxVal={maxVal}
                counter={counter}
                setCounter={setCounter}
                error={error}
                setShow={setShow}
            />}
            {show && <CounterSettings
                setCounter={setCounter}
                MinVal={minVal}
                MaxVal={maxVal}
                setError={setError}
                setShow={setShow}
                error={error}
            />}

        </div>
    );
}

export default App;
