import React from "react";
import { Layout } from 'antd';

const { Header } = Layout;

class HeaderTodo extends React.PureComponent{
    render() {
        return(
            <>
                <Header className="header__todo">Header</Header>

            </>
        )
    }
}

export default HeaderTodo;