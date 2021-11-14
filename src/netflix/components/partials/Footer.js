import React from "react";
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterMovies = () => {
    return (
        <Footer 
            style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED
        </Footer>

    )
}

export default React.memo(FooterMovies);
