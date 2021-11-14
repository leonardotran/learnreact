import React, { useState } from "react";
// tat ca cac hooks luon luon co tien to use dung dang truoc

import IncrementCounter from './components/Increment';
//Dinh nghia va xu ly state voi hooks
const Counter = () => {
    const [count, setCount] = useState(0); // gan gia tri mac dinh la 0
    // count: ten cua state
    // setCount: Ham de cap nhat xu ly state
    // Tra ve ARRAY 
    const changeCounter = () => {
        setCount(count + 1);
        //this.setState
    }
        return (
            <>
                <h1>
                    Hooks - counter: {count}
                </h1>
                <IncrementCounter click={changeCounter} type="button" name="increment"> + </IncrementCounter>
            </>
        )
}

export default React.memo(Counter);