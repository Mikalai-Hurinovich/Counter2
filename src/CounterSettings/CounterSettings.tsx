import React, {useState} from "react";
import s from './CounterSettings.module.css'
import Button from "@material-ui/core/Button/Button";
import {Input} from "@material-ui/core";

type CounterSettingsPropsType = {
    MaxVal: number
    MinVal: number
    setCounter: React.Dispatch<React.SetStateAction<number>>
    setSettings: (min: number, max: number) => void
    setError: (value: string) => void
    error: string
}

const CounterSettings = (props: CounterSettingsPropsType) => {
    let [min, setMin] = useState<number>(props.MinVal);
    let [max, setMax] = useState<number>(props.MaxVal);

    const setMaxValue = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber <= min) {
            props.setError('Incorrect Value!')
        } else {
            props.setError('Please, enter value and \'Set\'')
        }
        setMax(e.currentTarget.valueAsNumber)


    }
    const setMinValue = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber >= max || e.currentTarget.valueAsNumber < 0) {
            props.setError('Incorrect Value!')

        } else {
            props.setError('Please, enter value and \'Set\'')
        }
        setMin(e.currentTarget.valueAsNumber)
    }
    const setSettings = () => {
        props.setSettings(min, max)
        props.setCounter(min)
    }
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>Counter Settings</h1>
            <div className={s.counter__settings_body}>
                <div>
                    <span>Max Value:</span>
                    <input className={props.error === 'Incorrect Value!' ? s.error__input : ''}
                           type="number"
                           onChange={setMaxValue}
                           value={max}/>
                </div>

                <div>
                    <span>Start Value:</span>
                    <input className={props.error === 'Incorrect Value!' ? s.error__input : ''}
                           type="number"
                           onChange={setMinValue} value={min}/>
                </div>
            </div>
            <Button
                variant="contained" color="primary" size={'large'}
                className={s.button}
                disabled={min < 0 || max < min || min === max}
                onClick={setSettings}>Set
            </Button>
        </div>
    )
}

export default CounterSettings;
