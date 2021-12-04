import React from 'react';
import IncrementCounter from '../components/increment';
import DecrementCounter from '../components/decrement';
import ResultCounter from '../components/result';

const CounterApp = () => {
    return (
        <>
            <ResultCounter/>
            <IncrementCounter/>
            <DecrementCounter/>
        </>
    )
}

export default React.memo(CounterApp);