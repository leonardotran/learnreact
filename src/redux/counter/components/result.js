import React from "react";
import { useSelector } from 'react-redux';


const ResultCounter = () => {
    const count = useSelector(state => state.counter.count);

    return (
        <h1>Counter: {count}</h1>

    )
}

export default React.memo(ResultCounter);