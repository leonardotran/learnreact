import React, { useState } from 'react';
// tat ca cac hooks luon luon co tien to use dung dang truoc
const IncrementCounter = (props) => {
    return ( 
        <button 
            type={props.type} 
            name={props.name}
            onClick={() => props.click()}
            >
            {props.children}
        </button>
    )
}

export default React.memo(IncrementCounter);