import React from 'react';
import {useSelector} from "react-redux";

function Number() {

    const number = useSelector(state => state.num)

    return (
        <>
            <p id="result">{number}</p>
            <p id="sec">sec</p>
        </>
    );
}

export default Number;