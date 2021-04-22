import Button from "@material-ui/core/Button/Button";
import React from "react";
import s from './Counter.module.css'


type CounterPropsType = {
    counter: number
    setCounter: (count: number) => void
    maxVal: number
    minVal: number
    error: string
    setShow: (show: boolean) => void
}
const Counter = (props: CounterPropsType) => {
    const IncrementStyle = {
        color: 'red',
    }
    return (
        <>
            <div className={s.main}>
                <div className={s.wrapper}>
                    <h1 className={s.title}>Counter</h1>
                    <div>
                        <div
                            style={props.counter >= props.maxVal || props.error === 'Incorrect Value!' ? IncrementStyle : undefined}
                            className={s.counter__display}>{props.counter}</div>
                        <div className={s.counter__buttons}>
                            <Button
                                variant="contained" color="primary" size={'small'}
                                disabled={props.counter >= props.maxVal}
                                className={s.increment}
                                onClick={() => {
                                    props.setCounter(props.counter + 1)
                                }}>+
                            </Button>
                            <Button
                                variant="contained" color="primary" size={'small'}
                                disabled={props.counter <= props.minVal}
                                className={s.decrement}
                                onClick={() => {
                                    props.setCounter(props.counter - 1)
                                }}>-
                            </Button>
                            <Button
                                variant="contained" color="primary" size={'small'}
                                disabled={props.counter === props.minVal}
                                className={s.reset}
                                onClick={() => props.setCounter(props.minVal)}>Reset
                            </Button>
                            <Button
                                variant="contained" color="primary" size={'small'}
                                className={s.show}
                                onClick={() => props.setShow(true)}>Set
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;
