import React from 'react';
import {useDispatch, useSelector} from "react-redux";


function Setbutton() {

    const dispatch = useDispatch()
    const number = useSelector(state => state.num)
    const stt = useSelector(state => state.stt)

    const handleIncrease = () => {
        dispatch({type:"INCREASE"})
        if (stt === false){
            dispatch({type:"STOP"})
        }
    }

    const handleDecrease = () => {
        dispatch({type:"DECREASE"})
    }

    return (
    <div id="pm">
        <input 
        type="button" 
        id="plus" 
        value="⬆" 
        disabled={stt===true || number === 0?"":"visabled"} 
        onClick = {handleIncrease} />

        <input 
        type="button" 
        id="minus" 
        value="⬇"
        disabled={(number >= 1 && stt === true)?"":"visabled"}  
        onClick = {handleDecrease} />

    </div>
    );
}

export default Setbutton;