import React from "react";
import { Layout } from 'antd';

const { Footer } = Layout;

class FooterTodo extends React.PureComponent{
    render() {
        return(
            <>
                <Footer className="footer__todo">Footer</Footer>

            </>
        )
    }
}

export default FooterTodo;