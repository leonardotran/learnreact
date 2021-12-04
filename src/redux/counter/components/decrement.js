import React from "react";
import { decrementNumber } from "../action/index"; //hooks react reduc
import { useDispatch, useSelector } from 'react-redux';


const DecrementCounter = () => {
    const dispatch = useDispatch();
    // lay state tu store
    const count = useSelector(state => state.counter.count);

    const dispatchDecrementNumber = () => {
        dispatch(decrementNumber(count));
    }
    return(
        <button onClick={() => dispatchDecrementNumber()}> - </button>

    )
    
}

export default React.memo(DecrementCounter);