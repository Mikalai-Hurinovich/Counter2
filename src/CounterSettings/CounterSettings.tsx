import React from "react";
import s from './CounterSettings.module.css'
import Button from "@material-ui/core/Button/Button";
import {useDispatch} from "react-redux";
import {setCounterAC, setMaxValAC, setMinValAC, setShowAC} from "../Redux/counter-reducer";
import {saveState} from "../localStorage";

type CounterSettingsPropsType = {
    MaxVal: number
    MinVal: number
    setCounter: (count: number) => void
    setShow: (show: boolean) => void
    // setSettings: (min: number, max: number) => void
    setError: (value: string) => void
    error: string
}

const CounterSettings = (props: CounterSettingsPropsType) => {
    const dispatch = useDispatch()
    const setMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber <= props.MinVal) {
            props.setError('Incorrect Value!')
        } else {
            props.setError('Please, enter value and \'Set\'')
        }
        dispatch(setMaxValAC(e.currentTarget.valueAsNumber))
    }
    const setMinValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber >= props.MaxVal || e.currentTarget.valueAsNumber < 0) {
            props.setError('Incorrect Value!')

        } else {
            props.setError('Please, enter value and \'Set\'')
        }
        dispatch(setMinValAC(e.currentTarget.valueAsNumber))
    }
    const setSettings = () => {
        dispatch(setCounterAC(props.MinVal))
        saveState('minVal', props.MinVal)
        saveState('maxVal', props.MaxVal)
        dispatch(setShowAC(false))
    }
    return (
        <div className={s.wrapper}>
            <div className={s.error}>
                {props.error}
            </div>
            <h1 className={s.title}>Counter Settings</h1>

            <div className={s.counter__settings_body}>
                <div>
                    <span>Max Value</span>
                    <input className={props.error === 'Incorrect Value!' ? s.error__input : ''}
                           type="number"
                           onChange={setMaxValue}
                           value={props.MaxVal}/>
                </div>

                <div>
                    <span>Start Value</span>
                    <input className={props.error === 'Incorrect Value!' ? s.error__input : ''}
                           type="number"
                           onChange={setMinValue}
                           value={props.MinVal}/>
                </div>
            </div>
            <div className={s.counter__buttons}>
                <Button
                    variant="contained" color="primary" size={'small'}
                    disabled={props.MinVal < 0 || props.MaxVal < props.MinVal || props.MinVal === props.MaxVal}
                    className={s.button}
                    onClick={setSettings}>Set
                </Button>
            </div>
        </div>
    )
}

export default CounterSettings;
