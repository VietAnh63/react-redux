import React from 'react';
import {useDispatch, useSelector} from "react-redux";

let interval;

function Button(props) {
    
    const dispatch = useDispatch()
    const number = useSelector(state => state.num)
    const stt = useSelector(state => state.stt)

    React.useEffect(()=>{
        if (number === 0) {
            clearInterval(interval)
        }

    }, [number])

    const handleGetStart = () => {
        
        if (number > 0 && stt === true){
            dispatch({type:"STOP"})
            interval =  setInterval(() => {
                dispatch({type:"START"})
            }, 1000);
        }
 
    }

    const handleReset = () => {
        dispatch({type:"RESET"})
    }

    const disPlayReset = () => {
        return (
            <input type="button" 
            id="reset" 
            value="Reset" 
            onClick={handleReset} />
        )
    }

    const disPlayButton = () => {
        return (
            <>
            <input type="button" 
            id="start" 
            disabled={number > 0 && stt===true?"":"disabled"} 
            value="Start" 
            onClick={handleGetStart} />
            <input type="button" 
            id="stop" 
            disabled={number > 0 && stt===false?"":"disabled"} 
            value="Stop" 
            onClick={handleStop} />
            </>
        )
    }

    const display = () => {
        if (number === 0) {
            return disPlayReset()
        }else {
            return disPlayButton()
        }
    }

    const handleStop = () => {
        if (number > 0){
            dispatch({type:"STOP"})
        }
        clearInterval(interval)
        
    }

    return (
        <div className="buttons">
            {display()}
        </div>
    );
}

export default Button;