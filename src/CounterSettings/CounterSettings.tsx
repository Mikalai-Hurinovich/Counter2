import React, {useState} from "react";
import s from './CounterSettings.module.css'
import Button from "@material-ui/core/Button/Button";

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

    const setMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber <= min) {
            props.setError('Incorrect Value!')
        } else {
            props.setError('Please, enter value and \'Set\'')
        }
        setMax(e.currentTarget.valueAsNumber)
    }
    const setMinValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber >= max || e.currentTarget.valueAsNumber < 0) {
            props.setError('Incorrect Value!')

        } else {
            props.setError('Please, enter value and \'Set\'')
        }
        setMin(e.currentTarget.valueAsNumber)
    }
    const setSettings = () => {
        //set local storage
        localStorage.setItem('max', JSON.stringify(max))
        localStorage.setItem('min', JSON.stringify(min))
        props.setSettings(min, max)
        props.setCounter(min)
    }
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>Counter Settings</h1>
            <div className={s.counter__settings_body}>
                <div>
                    <span>Max Value</span>
                    <input className={props.error === 'Incorrect Value!' ? s.error__input : ''}
                           type="number"
                           onChange={setMaxValue}
                           value={max}/>
                </div>

                <div>
                    <span>Start Value</span>
                    <input className={props.error === 'Incorrect Value!' ? s.error__input : ''}
                           type="number"
                           onChange={setMinValue}
                           value={min}/>
                </div>
            </div>
            <div className={s.counter__buttons}>
                <Button
                    variant="contained" color="primary" size={'small'}
                    disabled={min < 0 || max < min || min === max}
                    className={s.button}
                    onClick={setSettings}>Set
                </Button>
            </div>
        </div>
    )
}

export default CounterSettings;
