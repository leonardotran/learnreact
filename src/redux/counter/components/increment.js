import React from "react";
import { incrementNumber } from "../action/index"; //hooks react reduc
import { useDispatch, useSelector } from 'react-redux';


const IncrementCounter = () => {
    const dispatch = useDispatch();
    // lay state tu store
    const count = useSelector(state => state.counter.count);

    const dispatchIncrementNumber = () => {
        dispatch(incrementNumber(count));
    }
    return(
        <button onClick={() => dispatchIncrementNumber()}> + </button>

    )
    
}

export default React.memo(IncrementCounter);