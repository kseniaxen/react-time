import React from 'react'
import { useState, useEffect } from 'react'
export default function Timer() {
    const [seconds, setSeconds] = useState('');
    const [secondsValid, setSecondsValid] = useState(true);

    const [timer, setTimer] = useState(0);
    const [timerOn, setTimerOn] = useState(true);
    const [timerStop, setTimerStop] = useState(false);
    const handleSecondChaned = e => {
        e.preventDefault();
        const newValue = e.target.value;
        if (newValue.match(/^[0-9]{0,}$/) || !newValue) {
            setSeconds(newValue)
            setSecondsValid(true)
        } else {
            setSecondsValid(false)
        }
    }

    const handleSubmitChaned = e => {
        e.preventDefault();
        console.log(seconds)
    }

    function startTime() {
        if(timerStop){
            setTimerOn(true);
        }else{
            if (Number.parseInt(seconds) >= 0) {
                setTimer(seconds);
                setTimerOn(true);
            }
        }
    }

    function stopTime() {
        setTimerOn(false);
        setTimerStop(true);
    }

    useEffect(() => {
            if (timerOn) {
                if(timer <= 0){
                    setTimerStop(false);
                    setTimerOn(false);
                }else{
                    setTimeout(() => setTimer(timer - 1), 1000);
                }
            }
    },[timerOn, timer]);


    return (
        <div>
            <h2>Timer</h2>
            <h3>Input seconds</h3>
            <form onSubmit={handleSubmitChaned}>
                <div>
                    <input type="text" name="seconds" value={seconds} onChange={handleSecondChaned} required />
                    <span htmlFor="seconds" style={{ 'color': 'red', 'display': secondsValid ? 'none' : 'block' }}>Неверный формат</span>
                </div>
                <button type="submit" value="submit">Submit</button>
            </form>
            <h3>Timer: {timer} </h3>
            <button onClick={startTime}  disabled={timerOn} >Start</button>
            <button onClick={stopTime} disabled={!timerOn}>Stop</button>
        </div>
    );
}