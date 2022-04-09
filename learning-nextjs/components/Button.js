import React from 'react';
import {Button} from 'antd';

const ButtonAntd = () => {
    return (
        <Button type={props.type} name={props.name}>Primary Button</Button>
    )
}

export default React.memo(ButtonAntd);

