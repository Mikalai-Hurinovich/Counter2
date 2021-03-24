import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import CounterSettings from "./CounterSettings/CounterSettings";

function App() {
    // Local Storage
    let minValStorage = Number(localStorage.getItem('min'))
    let maxValStorage = Number(localStorage.getItem('max'))
    //Hooks
    let [counter, setCounter] = useState<number>(minValStorage ? minValStorage : 0);
    let [MinVal, setMinVal] = useState<number>(minValStorage ? minValStorage : 0);
    let [MaxVal, setMaxVal] = useState<number>(maxValStorage ? maxValStorage : 5);
    let [error, setError] = useState<string>('');
    let [show, setShow] = useState<boolean>(false)


    const setSettings = (min: number, max: number) => {
        setMinVal(min)
        setMaxVal(max)
        setError('')
        setCounter(counter)
        setShow(false)
    }

    return (
        <div className="App">
            {!show && <Counter
                MinVal={MinVal}
                MaxVal={MaxVal}
                counter={counter}
                setCounter={setCounter}
                error={error}
                setShow={setShow}
            />}
            {show && <CounterSettings
                setCounter={setCounter}
                MinVal={MinVal}
                MaxVal={MaxVal}
                setError={setError}
                setSettings={setSettings}
                error={error}
            />}

        </div>
    );
}

export default App;
